var winner = 0;
var counter = 0;
var counterWinner = 0;
var matriz = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var str = "";

function mudaImagem(i) 
{   
    if(winner == 0)
    {
        //alert(i);
        for(var x = 0; x < 9; x++)
        {
            if (i == x && matriz[i] == 0) 
            {
                if(counter % 2 === 0)
                {
                    document.getElementById("imagem" + i).src="tictactoe/x.png"; 
                    matriz[i] = 1;
                }
                else
                {
                    document.getElementById("imagem" + i).src="tictactoe/o.png"; 
                    matriz[i] = -1;
                }
                win();
                counter++;
            }
        }  
        document.getElementById("feed").innerHTML = info();
    }
}
function win()
{
    for(var x = 0; x < 3; x++)
    {
        if(matriz[x*3] == matriz[x*3+1] && matriz[x*3] == matriz[x*3+2])
        { 
            if(matriz[x*3] == 1)
                winner = 1;
            else if(matriz[x*3] == -1)
                winner = 2;
        }
        else if(matriz[x] == matriz[x+3] && matriz[x] == matriz[x+2*3])
        {
            if(matriz[x] == 1)
                winner = 1;
            else if(matriz[x] == -1)
                winner = 2;
        }
    }
    for(var x = 2; x < 5; x+=2)
    {
        if(matriz[4] == matriz[4-x] && matriz[4] == matriz[4+x])
        {  
            if(matriz[4] == 1)
                winner = 1;
            else if(matriz[4] == -1)
                winner = 2;
        }
    }
    var test = 0;
    for(var x = 0; x < 9; x++)
        if(matriz[x] == 0)
            test++;
    if(test == 0 && winner == 0)
        winner = 3;
}
function reset() 
{
    winner = false;
    counter = 0;
    for(var x = 0; x < 9; x++)
        matriz[x] = 0;
    document.getElementById("feed").innerHTML = info();
}

function info()
{
    if(winner == 0)
        str = "It is the turn of player " + ((counter % 2)+1) + "!";
    else if(winner == 3)                        
        str = "The game ended in a draw!";
    else 
        str = "Player " + winner + " has won!!!";
    return str;
}
function start()
{
    document.getElementById("feed").innerHTML = info();
}