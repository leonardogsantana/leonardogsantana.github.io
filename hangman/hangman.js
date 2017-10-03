<src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js">

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
    document.getElementById("hidden").value = hiddenWord;
}

function StartHiddenWord()
{
    alert("Entrou!" + currentWord.length.toString());
    for (var i = 0; i < currentWord.length; i++) 
        hiddenWord += "*";    
    document.getElementById("hidden").value = hiddenWord.toString();
    alert(hiddenWord + "  " + currentWord);
}

var app = angular.module('myApp', []);
app.controller('wordCtrl', function ($scope, $http) {
    $http.get("https://www.w3schools.com/angular/customers_mysql.php")
        .then(function (response) {
        $scope.registros = response.data.records;
        $scope.allData = response.data;
        var unicos = [];
        for (i = 0; i < $scope.registros.length; i++) {
            var j = unicos.indexOf($scope.registros[i].Country);
            if (j === -1) {
                unicos.push($scope.registros[i].Country);
            }
        }
        $scope.quantPaises = unicos.length;
        $scope.mensagem = $scope.registros.length + " clientes em "
            + $scope.quantPaises + " países.";
        $scope.word = hiddenWord;
    }, function (response) {
        $scope.mensagem = "Erro ao executar chamada remota. "
            + "Motivo: " + response.status + " - "
            + response.statusText;
        $scope.word = hiddenWord;
    });
    $scope.ordenarPor = function (x) {
        $scope.campoOrdenacao = x;
    }
});