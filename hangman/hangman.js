/*var listWord = ["Alemanha", "Japão", "Brasil", "Croacia"];
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

function StartHiddenWord()
{
    alert("Entrou!" + currentWord.length.toString());
    for (var i = 0; i < currentWord.length; i++) 
        hiddenWord += "*";    
    document.getElementById("hidden").value = hiddenWord.toString();
    alert(hiddenWord + "  " + currentWord);
}*/

var App = angular.module('App', []);

App.controller('PaisesCtrl', function($scope, $http) {
  $http.get('file://hangman/paises.json')
       .then(function(res){
          $scope.todosPaises = res.data;                
        });
});