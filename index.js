var count=0;

function box1(){
    (count%2 == 0) ? (document.getElementById("1").innerHTML = "X") : (document.getElementById("1").innerHTML = "O")
    document.getElementById("1").disabled = true;
    count++;
   }

function box2(){
    (count%2 == 0) ? (document.getElementById("2").innerHTML = "X") : (document.getElementById("2").innerHTML = "O")
    document.getElementById("2").disabled = true;
    count++;
   }

function box3(){
    (count%2 == 0) ? (document.getElementById("3").innerHTML = "X") : (document.getElementById("3").innerHTML = "O")
    document.getElementById("3").disabled = true;
    count++;
}

function box4(){
    (count%2 == 0) ? (document.getElementById("4").innerHTML = "X") : (document.getElementById("4").innerHTML = "O")
    document.getElementById("4").disabled = true;
    count++;
 }

function box5(){
    (count%2 == 0) ? (document.getElementById("5").innerHTML = "X") : (document.getElementById("5").innerHTML = "O")
    document.getElementById("5").disabled = true;
    count++;
    }

function box6(){
    (count%2 == 0) ? (document.getElementById("6").innerHTML = "X") : (document.getElementById("6").innerHTML = "O")
    document.getElementById("6").disabled = true;
    count++;
}

function box7(){
    (count%2 == 0) ? (document.getElementById("7").innerHTML = "X") : (document.getElementById("7").innerHTML = "O")
    document.getElementById("7").disabled = true;
    count++;
}

function box8(){
    (count%2 == 0) ? (document.getElementById("8").innerHTML = "X") : (document.getElementById("8").innerHTML = "O")
    document.getElementById("8").disabled = true;
    count++;
}

function box9(){
    (count%2 == 0) ? (document.getElementById("9").innerHTML = "X") : (document.getElementById("9").innerHTML = "O")
    document.getElementById("9").disabled = true;
    count++;
 }

function begin(){

    var box1value = document.getElementById("1").innerHTML,
    box2value = document.getElementById("2").innerHTML,
    box3value = document.getElementById("3").innerHTML,
    box4value = document.getElementById("4").innerHTML,
    box5value = document.getElementById("5").innerHTML,
    box6value = document.getElementById("6").innerHTML,
    box7value = document.getElementById("7").innerHTML,
    box8value = document.getElementById("8").innerHTML,
    box9value = document.getElementById("9").innerHTML;

    (count%2 == 0) ? (document.getElementById("print").innerHTML = "Player X's turn") : (document.getElementById("print").innerHTML = "Player O's turn");

    if(box1value == "X" && box2value == "X" && box3value == "X" ){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box4value == "X" && box5value == "X" && box6value == "X"){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box7value == "X" && box8value == "X" && box9value == "X" ){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
    }

    else if(box1value == "X" && box4value == "X" && box7value == "X"){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box2value == "X" && box5value == "X" && box8value == "X"){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box3value == "X"&& box6value == "X" && box9value == "X"){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
    }

    else if(box1value == "X" && box5value == "X" && box9value == "X"){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
    }

    else if(box3value == "X" && box5value == "X" && box7value == "X"){
        setTimeout(function(){ alert("Congratulations! Player X wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box1value == "O" && box2value == "O" && box3value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box4value == "O" && box5value == "O" && box6value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box7value == "O" && box8value == "O" && box9value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
    }

    else if(box1value == "O" && box4value == "O" && box7value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box2value == "O" && box5value == "O" && box8value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(box3value == "O" && box6value == "O" && box9value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
    }

    else if(box1value == "O" && box5value == "O" && box9value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
    }

    else if(box3value == "O" && box5value == "O" && box7value == "O"){
        setTimeout(function(){ alert("Congratulations! Player O wins"); }, 100);
        document.getElementById("print").innerHTML = "Game Over !!!";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }

    else if(count===9){
        document.getElementById("print").innerHTML = "Game Over !!!";
        setTimeout(function(){ alert("Match Draw!"); }, 100);
    }
}

function reset(){
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";

    location.reload();
}