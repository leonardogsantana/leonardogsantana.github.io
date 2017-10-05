var App = angular.module('App', []);
var listWord = [];
var currentWord = '';
var wrongLetters = [];
var playing = false;
var i = 0;
var hiddenWord = '';

App.controller('HangmanCtrl', function($scope, $http) {
    $http.get('http://leonardogsantana.github.io/paises.json')
        .then(function(res){
        $scope.registros = res.data.paises;
        $scope.todosPaises = res.data;

        for (i = 0; i < $scope.registros.length; i++) 
            listWord.push($scope.registros[i].nome_pais);

        $scope.quantPaises = listWord.length;
        $scope.mensagem = "São " + $scope.registros.length + " países.";
        $scope.hidden = StartHiddenWord();
        //UpdateHoverLetter();
    });
    $scope.Update = function () 
    {
        var letter = document.getElementById("inputLetter").value.toString();
        if(!/[a-z]/gm.test(letter))
            alert("Insira um valor válido!");
        else
        {
            var aux = CheckInput(document.getElementById("inputLetter").value.toString());
            //alert($scope.hidden);
            if(aux != null)
            {    
                var h = '';
                for(i = 0; i < $scope.hidden.length; i++)
                    if($scope.hidden[i] != "*")
                        h += $scope.hidden[i];
                    else if(aux[i] != "*")
                        h += aux[i];
                    else
                        h += "*";
                $scope.hidden = h;
            }

            //alert(aux);
            //alert($scope.hidden);

        }
        document.getElementById("inputLetter").value = '';
    }
});

function IsNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


/*function UpdateHoverLetter()
{
    var x = [];
    x = document.getElementsByClassName("hiddenLetter");
    //alert("Entrou!!!  " +  x.length);
    for (i = 0; i < x.length; i++) 
        if(x[i].innerHTML == "*")
        {    
            alert(x[i].innerHTML.toString());
            x.style.hover.backgroundColor = 'red';
            x.style.hover.color= 'white';
        }
        else           
        {   
            alert(x[i].innerHTML.toString());
            x.style.hover.backgroundColor = 'green';
            x.style.hover.color= 'black';
        }
}*/

function CheckInput(letterX)
{
    var test = '';
    var invalido = true;
    var currentWord2 = currentWord;
    //alert(currentWord + currentWord.length.toString());
    for (i = 0; i < currentWord.length; i++) 
    { 
        //alert(letterX + "  -  " + currentWord.charAt(i));
        if(letterX.toLowerCase() == currentWord2.charAt(i).toLowerCase())
        {
            test += currentWord[i];
            invalido = false;
        }
        else
            test+= "*";
    }
    if(invalido)    
        return UpdateWord(letterX);
    else 
        return test;
}

function UpdateWord(letter)
{
    if(letter != " " || letter != "")
        wrongLetters.push(letter);
    alert("Palpites errados: " + wrongLetters.toString());
    return null;
}

function StartHiddenWord()
{
    var currentListIndex = Math.floor(Math.random() * listWord.length);
    currentWord = listWord[currentListIndex];
    hiddenWord = '';
    for (i = 0; i < currentWord.length; i++) 
        hiddenWord += "*";
    //alert(hiddenWord);
    return hiddenWord;
}

function StartGame()
{
    SetDisplay("startButton", false);    
    SetDisplay("inputChar", true);    
}

function EndGame()
{   
    SetDisplay("inputChar", false);    
    SetDisplay("startButton", true);
}

function SetDisplay(id, visible) 
{
    var x = document.getElementById(id);
    if (visible) 
        x.style.display = "block";
    else 
        x.style.display = "none";
}