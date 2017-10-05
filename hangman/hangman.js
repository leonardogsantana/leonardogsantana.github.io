var listWord = ["Alemanha", "Japão", "Brasil", "Croacia"];
var currentListIndex = Math.floor(Math.random() * listWord.length);
var currentWord = listWord[currentListIndex];
var hiddenWord = '';
var wrongLetters = [];
function CheckInput(letter)
{
    for (var i = 0; i < currentWord.length; i++) 
        if(letter == currentWord[i])
        {
            UpdateHiddenWord(letter);
            return true;                             
        }
        else
            return false;
}

function UpdatecurrentWord(letter)
{
    wrongLetters[wrongLetters.length] = letter;
    for (var i = 0; i < currentWord.length; i++) 
        if(hiddenWord.charAt(i) == "*")
            if(currentWord.charAt(i) == letter)
            {
                hiddenWord[i] = letter;
            }
    //document.getElementById("hidden").value = hiddenWord;
}

function StartHiddenWord(paises)
{
    listWord = paises;
    alert("Entrou!" + currentWord.length.toString());
    for (var i = 0; i < currentWord.length; i++) 
        hiddenWord += "*";    
    alert(hiddenWord + "  " + currentWord);
}

var App = angular.module('App', []);
var unicos = [];
App.controller('PaisesCtrl', function($scope, $http) {
    $http.get('http://leonardogsantana.github.io/paises.json')
        .then(function(res){
        $scope.registros = res.data.paises;
        $scope.todosPaises = res.data;
        for (i = 0; i < $scope.registros.length; i++) {
            var j = unicos.indexOf($scope.registros[i].Country);
            if (j === -1) {
                unicos.push($scope.registros[i].Country);
            }
        }
        $scope.quantPaises = unicos.length;
        $scope.mensagem = $scope.registros.length + " clientes em "
            + $scope.quantPaises + " países.";
    });
    StartHiddenWord($scope.todosPaises)
});