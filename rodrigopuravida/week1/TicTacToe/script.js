document.addEventListener('DOMContentLoaded',function(){
  
  //variables declaration for images
  var blankSpace = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310800/blank.png"
  var oSpace = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310800/O.png"
  var xSpace = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/310800/X.png"

  //variable declaration for keeping track of turns
  var turnCounter = 1;
  var temp;

  //init array for X and O 
  var ticTacToeBoard = [[null,null,null],
                    [null,null,null],
                    [null,null,null]];

//BEGIN FUNCTIONS

function setSquare(player, row, col) {
    ticTacToeBoard[row][col] = player;
}

function getPieceAt(row, col) {
    
    return ticTacToeBoard[row][col];
}

function clearBoard() {
    return null;
    
}

//this fucntion determines the postion in the tictactoe board where the symbol will be placed
function determineRowAndColumn(inputId) {

var location = [];
var num = parseInt(inputId);
//console.log('determineRowAndColumn = ' + num);

if (num >= 0 && num <=2) {
    //console.log("Im here at first row");
    location = [0,num];
    //console.log('location = ' + location);
    return location;
  } 
else if (num > 2 && num <=5) {
    //console.log("Im here at second row");
    location = [1,num-3];
    //console.log('location = ' + location);
    return location;
  }
else if (num > 5 && num <9) {
    //console.log("Im here at third row");
    location = [2,num-6];
    //console.log('location = ' + location);
    return location;
  }
}

function winnerValidatorRow() {

  var arraySymbols = ["X", "O"];
  var winner;
  var winCounter = 0;

  for (var i = 0; i < arraySymbols.length; i++) {
    console.log('Im at winner row validator');
    var winCounter = 0;
  for (var row = 0; row < 3; row++) {
    var winCounter = 0;
    for (var col = 0; col <3; col++) {
      console.log(getPieceAt(row, col));
      if (getPieceAt(row, col) === arraySymbols[i]) {
        //console.log(arraySymbols[i]);
        winCounter++;
        console.log('Winner counter is ' + winCounter);
        if (winCounter === 3) {
        winner = arraySymbols[i];
        document.querySelector('#winnerText').value = winner;
        return;
    }
      }
     
    }
  }

} //end of loop for arraySymbols
} //end of function parentheses


function winnerValidatorColumn() {
  var arraySymbols = ["X", "O"];
  var winner;
  var winCounter = 0;

for (var j = 0; j < arraySymbols.length; j++) {
  console.log('Im at winner column validator');
  var winCounter = 0;
  for (var col = 0; col < 3; col++) {
    var winCounter = 0;
    for (var row = 0; row <3; row++) {
      console.log('row ' + row + ' col ' + col);
      console.log('getpiece' + getPieceAt(row, col) );
      if (getPieceAt(row, col) === arraySymbols[j]) {
        console.log('column validation' + arraySymbols[j]);
        winCounter++;
        console.log('Winner counter is ' + winCounter);
        if (winCounter === 3) {
        winner = arraySymbols[j];
        document.querySelector('#winnerText').value = winner;
        return
      }
    }
    
    }
  }
}

}


function winnerValidatorDiagonal() { 

  var arraySymbols = ["X", "O"];
  var winner;
  var winCounter = 0;
  var col = 0;

  for (var k = 0; k < arraySymbols.length; k++) {
    winCounter = 0;
    console.log('Im at diagonal verification right to left');
    for (var row = 0; row < 3; row++) {
      if (getPieceAt(row, col) === arraySymbols[k]) {
        winCounter++;
        if (winCounter === 3) {
          console.log('wincounter = ' + winCounter);
          winner = arraySymbols[k];
          document.querySelector('#winnerText').value = winner;
          return
        }
        col++;
      }

    }
  }
 

  for (var l = 0; l < arraySymbols.length; l++) {
    winCounter = 0;
    col = 2;
    console.log('Im at diagonal verification lef to right');
    for (var row = 0; row < 3; row++) {
      if (getPieceAt(row, col) === arraySymbols[l]) {
        winCounter++;
        if (winCounter === 3) {
          winner = arraySymbols[l];
          document.querySelector('#winnerText').value = winner;
          return
        }
        col--;
      }

    }
  }
}


  
var spaceClicker = function(){

    var firstPlayer =  document.querySelector('#firstPlayerText').value;
    document.querySelector('#turnNumberText').value = turnCounter;
    var clickedElementId = this.id;
    //console.log('element id' + clickedElementId);

    var elementLocationInArray = determineRowAndColumn(clickedElementId);
    //console.log('ElementLocation in Array: ' + elementLocationInArray);

    //validating the space has not been assigned before
    if (this.src !== blankSpace) {
      console.log('Space already played');
      return;
    }
 
    //console.log(firstPlayer);
    //console.log(this);
    console.log(turnCounter);
    if (turnCounter ===  1) {
    if (firstPlayer === "X") {
      this.src = xSpace;
      temp = xSpace;
      setSquare('X', elementLocationInArray[0], elementLocationInArray[1]);

    }
    else if (firstPlayer === "O") {
    this.src = oSpace;
    temp = oSpace;
    setSquare('O', elementLocationInArray[0], elementLocationInArray[1]);
    }
  }

  //console.log("temp: " + temp);

  if (turnCounter > 1) {
  if (temp === xSpace) {
    this.src = oSpace;
    temp = oSpace;
    setSquare('O', elementLocationInArray[0], elementLocationInArray[1]);
    }
  else if (temp === oSpace) {
    this.src = xSpace;
    temp = xSpace;
    setSquare('X', elementLocationInArray[0], elementLocationInArray[1]);
    }
  } 
  //console.log("this.src= " + this.src);
  console.log(ticTacToeBoard);

  //only validate to see if there is winner after 3 moves
  if (turnCounter > 3) {

    winnerValidatorRow() ;
    winnerValidatorColumn();
    winnerValidatorDiagonal();
    
  }

  turnCounter += 1;
  }



  //END OF FUNCTIONS

  //code that call functions

  var spaces = document.querySelectorAll('.left-col .space');
  for(var i =0;i < spaces.length; i++){
    //var spaceId = document.getElementsByName(name)
    spaces[i].addEventListener('click',spaceClicker);
  }

  //call reset function
  document.querySelector('#reset-Form').addEventListener('submit',function(e){
    e.preventDefault();
    var spaces = document.querySelectorAll('.left-col .space');
    for(var i =0;i < spaces.length; i++){
    //var spaceId = document.getElementsByName(name)
    spaces[i].src = blankSpace;
    }
    //set turn number text field to blank
    document.querySelector('#turnNumberText').value = '';
    document.querySelector('#winnerText').value = '';

    //clearing board
    //ticTacToeBoard.forEach(clearBoard);
    var ticTacToeBoard = [[null,null,null],
                    [null,null,null],
                    [null,null,null]];

    //set turnc counter back to 1
    turnCounter = 0;
    winCounter = 0;
    location.reload(true);

  });


  //game Play
  //not used
  var xPlayer;
  var oPlayer;







  



  
});
