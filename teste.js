var listWord = [];
var currentListIndex = Math.floor(Math.random() * listWord.length);
var currentWord = listWord[currentListIndex];
var hiddenWord;
var wrongLetters = [];

function CheckInput(in)
{
for (var i = 0; i < currentWord.length; i++) 
if(in == currentWord[i])
{
UpdateHiddenWord(in);
return true;
}
return false;
}

function UpdatecurrentWord(letter)
{
wrongLetters[wrongLetters.length] = letter;
for (var i = 0; i < currentWord.length; i++) 
if(hiddenWord == '*')
if(currentWord[i] == letter)
{
hiddenWord[i] = letter;
}

}

function StartHiddenWord()
{
for (var i = 0; i < currentWord.length; i++) 
hiddenWord[i] = '*';
}


Atenciosamente,

Leonardo Gomes Santana
Bolsista de iniciação científica
VIZLab - Multidisciplinary Advanced Visualization Laboratory
Unisinos - Somos infinitas Possibilidades
www.unisinos.br
(51) 3591-1122 / Ramal: 1776