const wall = "wall";
const floor = "floor";
const goal = "goalPoint";
const player = "player";
const box = "box";
const map = [
    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", " ", " ", ".", " ", "#"],
        ["#", "#", " ", "*", " ", " ", " ", "#"],
        ["#", "#", " ", ".", " ", " ", " ", "#"],
        ["#", "#", " ", "$", " ", "$", "#", "#"],
        ["#", "#", "#", " ", "@", " ", "#", "#"],
        ["#", "#", "#", "#", "#", "#", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", " ", " ", ".", "@", " ", "#"],
        ["#", "#", " ", "#", ".", "#", " ", "#"],
        ["#", "#", " ", " ", " ", "$", " ", "#"],
        ["#", "#", ".", "$", "$", " ", " ", "#"],
        ["#", "#", " ", " ", " ", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", " ", "@", "#", "#"],
        ["#", " ", " ", "*", "$", " ", "#", "#"],
        ["#", " ", " ", " ", " ", " ", "#", "#"],
        ["#", " ", " ", ".", " ", "#", "#", "#"],
        ["#", "#", "$", " ", " ", "#", "#", "#"],
        ["#", "#", " ", ".", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", ".", "#", "#", "#", ".", "#"],
        ["#", "#", " ", " ", " ", " ", ".", "#"],
        ["#", "#", " ", "$", "$", " ", "@", "#"],
        ["#", "#", " ", " ", "$", " ", " ", "#"],
        ["#", "#", " ", " ", "#", " ", " ", "#"],
        ["#", "#", " ", " ", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", " ", "@", "#", "#"],
        ["#", "#", "#", "#", " ", " ", " ", "#"],
        ["#", ".", " ", " ", "$", "$", " ", "#"],
        ["#", " ", " ", " ", " ", " ", "#", "#"],
        ["#", ".", " ", " ", "$", "#", "#", "#"],
        ["#", "#", ".", " ", " ", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", " ", ".", ".", "#", "#", "#", "#"],
        ["#", " ", "$", " ", " ", " ", " ", "#"],
        ["#", " ", " ", "#", "$", "#", " ", "#"],
        ["#", " ", "@", " ", ".", "$", " ", "#"],
        ["#", "#", " ", " ", " ", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", " ", " ", ".", "#", "#"],
        ["#", " ", "$", " ", "#", " ", "#", "#"],
        ["#", " ", "*", "$", " ", " ", "#", "#"],
        ["#", " ", ".", "#", "@", " ", "#", "#"],
        ["#", " ", " ", " ", " ", " ", "#", "#"],
        ["#", " ", " ", " ", " ", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", ".", " ", " ", "@", ".", "#", "#"],
        ["#", " ", " ", "$", "#", " ", "#", "#"],
        ["#", " ", "#", " ", "$", ".", " ", "#"],
        ["#", " ", " ", " ", "$", " ", " ", "#"],
        ["#", "#", "#", "#", " ", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", ".", " ", ".", "#", "#", "#", "#"],
        ["#", ".", "#", "$", "$", " ", "#", "#"],
        ["#", " ", " ", " ", "@", " ", "#", "#"],
        ["#", " ", "$", "#", " ", " ", "#", "#"],
        ["#", "#", " ", " ", " ", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", ".", " ", " ", "#", "#", "#", "#"],
        ["#", " ", "#", " ", " ", " ", "#", "#"],
        ["#", " ", ".", " ", "#", " ", "#", "#"],
        ["#", " ", "$", "*", "$", " ", "#", "#"],
        ["#", " ", "@", " ", " ", "#", "#", "#"],
        ["#", "#", " ", " ", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", " ", " ", " ", " ", " ", " ", "#"],
        ["#", ".", " ", " ", " ", ".", " ", "#"],
        ["#", " ", "#", " ", "#", " ", " ", "#"],
        ["#", "@", "$", " ", " ", "$", ".", "#"],
        ["#", " ", "#", " ", "#", " ", "$", "#"],
        ["#", "#", "#", "#", "#", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", " ", " ", "#", "#", "#", "#", "#"],
        ["#", " ", " ", "#", "#", "#", "#", "#"],
        ["#", " ", ".", "*", " ", " ", " ", "#"],
        ["#", "#", "$", " ", " ", " ", " ", "#"],
        ["#", "#", " ", "#", "$", "#", "#", "#"],
        ["#", "#", ".", " ", "@", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", " ", "@", " ", "#", "#", "#"],
        ["#", "#", " ", ".", " ", " ", " ", "#"],
        ["#", ".", " ", "$", ".", "$", " ", "#"],
        ["#", "#", "$", "#", " ", "#", "#", "#"],
        ["#", "#", " ", " ", " ", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", " ", " ", " ", "#", "#", "#"],
        ["#", " ", "$", "#", " ", "#", "#", "#"],
        ["#", " ", ".", " ", "@", "#", "#", "#"],
        ["#", " ", "*", " ", " ", " ", "#", "#"],
        ["#", "#", " ", "#", "$", " ", "#", "#"],
        ["#", "#", ".", " ", " ", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", " ", " ", "#", "#", "#", "#"],
        ["#", ".", ".", "$", " ", " ", ".", "#"],
        ["#", " ", "#", "$", " ", "$", " ", "#"],
        ["#", "@", " ", " ", "#", " ", " ", "#"],
        ["#", "#", "#", "#", "#", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", " ", " ", ".", "@", "#", "#"],
        ["#", "#", " ", " ", " ", "$", ".", "#"],
        ["#", "#", "#", "#", "*", "#", " ", "#"],
        ["#", "#", " ", " ", " ", " ", " ", "#"],
        ["#", " ", " ", "$", " ", " ", "#", "#"],
        ["#", " ", " ", " ", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "@", " ", "#", "#", "#", "#"],
        ["#", "#", " ", " ", "#", "#", "#", "#"],
        ["#", "#", ".", " ", "#", "#", "#", "#"],
        ["#", " ", "$", "$", ".", " ", ".", "#"],
        ["#", " ", " ", "$", " ", "#", "#", "#"],
        ["#", "#", "#", " ", " ", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", ".", " ", " ", "#", "#", "#"],
        ["#", "#", " ", "#", " ", "#", "#", "#"],
        ["#", "#", " ", "*", "$", " ", " ", "#"],
        ["#", "#", " ", " ", "$", ".", " ", "#"],
        ["#", "#", " ", " ", "@", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", " ", " ", " ", "#", "#"],
        ["#", "#", "#", " ", "#", ".", "#", "#"],
        ["#", "#", "#", " ", " ", ".", "#", "#"],
        ["#", "@", " ", "$", "$", " ", "#", "#"],
        ["#", " ", " ", ".", "$", " ", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", " ", " ", " ", "@", "#", "#", "#"],
        ["#", " ", "$", "#", " ", "#", "#", "#"],
        ["#", " ", "*", " ", "$", " ", " ", "#"],
        ["#", " ", " ", " ", "#", "#", " ", "#"],
        ["#", "#", ".", " ", " ", ".", " ", "#"],
        ["#", "#", "#", " ", " ", " ", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", " ", " ", " ", "@", "#", "#"],
        ["#", "#", " ", " ", "#", " ", " ", "#"],
        ["#", "#", ".", " ", " ", "$", " ", "#"],
        ["#", "#", " ", "$", "$", "#", ".", "#"],
        ["#", "#", "#", "#", " ", " ", ".", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", ".", " ", "#", "#", "#"],
        ["#", " ", ".", " ", " ", "#", "#", "#"],
        ["#", " ", " ", " ", "$", "$", " ", "#"],
        ["#", "#", " ", ".", " ", "$", "@", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "@", ".", " ", " ", "#", "#"],
        ["#", " ", "$", "$", "*", " ", "#", "#"],
        ["#", " ", " ", "#", " ", " ", "#", "#"],
        ["#", " ", " ", "#", " ", " ", ".", "#"],
        ["#", "#", "#", "#", " ", "#", " ", "#"],
        ["#", "#", "#", "#", " ", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", " ", " ", "#"],
        ["#", "#", "#", "#", "#", "$", ".", "#"],
        ["#", "#", "#", " ", " ", ".", " ", "#"],
        ["#", "#", "#", " ", " ", "#", ".", "#"],
        ["#", " ", "$", " ", " ", "$", " ", "#"],
        ["#", " ", " ", " ", "#", "@", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", " ", " ", "#", "#", "#"],
        ["#", "#", "#", " ", " ", "#", "#", "#"],
        ["#", "#", "#", " ", ".", ".", " ", "#"],
        ["#", " ", " ", "$", "#", " ", " ", "#"],
        ["#", " ", " ", ".", "$", "$", " ", "#"],
        ["#", "#", "#", "#", " ", "@", " ", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", " ", " ", " ", "#", "#", "#", "#"],
        ["#", " ", "#", " ", "*", "@", "#", "#"],
        ["#", " ", " ", "*", " ", " ", " ", "#"],
        ["#", "#", "#", "$", " ", " ", " ", "#"],
        ["#", "#", "#", " ", " ", " ", ".", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", " ", ".", " ", " ", "#"],
        ["#", " ", "$", "@", "#", ".", " ", "#"],
        ["#", " ", " ", "$", "#", " ", "#", "#"],
        ["#", " ", " ", "*", " ", " ", "#", "#"],
        ["#", "#", " ", " ", "#", " ", "#", "#"],
        ["#", "#", "#", " ", " ", " ", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", " ", " ", "#", "#", "#", "#"],
        ["#", " ", " ", " ", " ", " ", "#", "#"],
        ["#", " ", " ", "#", "$", "$", "@", "#"],
        ["#", " ", " ", ".", " ", "*", ".", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "@", " ", " ", " ", " ", "#"],
        ["#", ".", " ", "#", " ", " ", " ", "#"],
        ["#", " ", "$", "$", "$", ".", "#", "#"],
        ["#", " ", ".", "#", " ", " ", "#", "#"],
        ["#", " ", " ", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]],

    [   ["#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", " ", " ", ".", "#", "#", "#", "#"],
        ["#", " ", "$", ".", ".", " ", "#", "#"],
        ["#", " ", " ", "#", "#", "$", "#", "#"],
        ["#", "#", " ", " ", "#", " ", " ", "#"],
        ["#", "#", "$", " ", " ", " ", "@", "#"],
        ["#", "#", " ", " ", "#", "#", "#", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#"]]

];

var playerPosition = {}; // Store player position
var currentLevel = 1;
var gameBoard = buildBoard();
var step = 0;

//Give the basic information of the game and print the game board
$("#steps").text("Steps: " + step);
$("#currentLevel").text("Current Level: " + currentLevel);
printBoard();

//create a drop list for level selection
function createDropList() {
    let dropList = $("#selection");
    let HTMLString = '';
    for (let level=1; level < 31; level++){
        HTMLString += "<option value='"+level+"''>"+level+"</option>";
    }
    dropList.html(HTMLString);
}
createDropList();

// create the game board
function buildBoard() {
    //Create the 8*8 Matrix
    var board = new Array(8);
    for (let i = 0; i<board.length; i++) {
        board[i] = new Array(8);
    }

    // Put floor everywhere and walls at edges, create objects for each cell, give them type and gameElement property
    for (let i = 0; i<board.length; i++) {
        for (let j = 0; j<board[0].length; j++) {
            //set the default value for each cell object
            let cell = {type: floor, gameElement: null}; 
            //Judge if current cell is at the edge
            if (i === 0 || j === 0 || i === board.length -1 || j === board[0].length -1) {
                //if so, add "wall" to the cell's type property
                cell.type = wall;
            }
            //give each element in the game board an object with two properties (type and gameElement)
            board[i][j] = cell;
        }
    }

    //generate extra elements according to the map, set the property for each element
    function setGameElements() {
        for (let i in map[currentLevel-1]){
            for (let j in map[currentLevel-1][i]){
                if (map[currentLevel-1][i][j] === "#"){
                    board[i][j].type = wall;
                }
                if (map[currentLevel-1][i][j] === "$"){
                    board[i][j].gameElement = box;
                }
                if (map[currentLevel-1][i][j] === "."){
                    board[i][j].type = goal;
                }
                if (map[currentLevel-1][i][j] === "*"){
                    board[i][j].gameElement = box;
                    board[i][j].type = goal;
                }
            }
        }
        board[playerPosition.i][playerPosition.j].gameElement = player;
    }

    //Initiate Elements in the Map by current Level
    switch (currentLevel) {
        //Case 1 is a try of implementing object concept to my game, helped me to understand how obj works in JS.
        case 1:
            playerPosition = {i:4, j:6};
            board[1][5].type = goal;
            board[3][3].type = goal;
            board[playerPosition.i][playerPosition.j].gameElement = player;
            board[4][3].gameElement = box;
            board[4][5].gameElement = box;
            break;
        case 2:
            playerPosition = {};
            playerPosition = {i:1, j:5};
            setGameElements();
            break;
        case 3:
            playerPosition = {};
            playerPosition = {i:1, j:5};
            setGameElements();
            break;
        case 4:
            playerPosition = {};
            playerPosition = {i:3, j:6};
            setGameElements();
            break;
        case 5:
            playerPosition = {};
            playerPosition = {i:1, j:5};
            setGameElements();
            break;
        case 6:
            playerPosition = {};
            playerPosition = {i:4, j:2};
            setGameElements();
            break;
        case 7:
            playerPosition = {};
            playerPosition = {i:4, j:4};
            setGameElements();
            break;
        case 8:
            playerPosition = {};
            playerPosition = {i:2, j:4};
            setGameElements();
            break;
        case 9:
            playerPosition = {};
            playerPosition = {i:3, j:4};
            setGameElements();
            break;
        case 10:
            playerPosition = {};
            playerPosition = {i:5, j:2};
            setGameElements();
            break;
        case 11:
            playerPosition = {};
            playerPosition = {i:4, j:1};
            setGameElements();
            break;
        case 12:
            playerPosition = {};
            playerPosition = {i:6, j:4};
            setGameElements();
            break;
        case 13:
            playerPosition = {};
            playerPosition = {i:1, j:3};
            setGameElements();
            break;
        case 14:
            playerPosition = {};
            playerPosition = {i:3, j:4};
            setGameElements();
            break;
        case 15:
            playerPosition = {};
            playerPosition = {i:5, j:1};
            setGameElements();
            break;
        case 16:
            playerPosition = {};
            playerPosition = {i:1, j:5};
            setGameElements();
            break;
        case 17:
            playerPosition = {};
            playerPosition = {i:1, j:2};
            setGameElements();
            break;
        case 18:
            playerPosition = {};
            playerPosition = {i:6, j:4};
            setGameElements();
            break;
        case 19:
            playerPosition = {};
            playerPosition = {i:5, j:1};
            setGameElements();
            break;
        case 20:
            playerPosition = {};
            playerPosition = {i:1, j:4};
            setGameElements();
            break;
        case 21:
            playerPosition = {};
            playerPosition = {i:1, j:5};
            setGameElements();
            break;
        case 22:
            playerPosition = {};
            playerPosition = {i:5, j:6};
            setGameElements();
            break;
        case 23:
            playerPosition = {};
            playerPosition = {i:1, j:2};
            setGameElements();
            break;
        case 24:
            playerPosition = {};
            playerPosition = {i:6, j:5};
            setGameElements();
            break;
        case 25:
            playerPosition = {};
            playerPosition = {i:6, j:5};
            setGameElements();
            break;
        case 26:
            playerPosition = {};
            playerPosition = {i:2, j:5};
            setGameElements();
            break;
        case 27:
            playerPosition = {};
            playerPosition = {i:2, j:3};
            setGameElements();
            break;
        case 28:
            playerPosition = {};
            playerPosition = {i:6, j:1};
            setGameElements();
            break;
        case 29:
            playerPosition = {};
            playerPosition = {i:2, j:5};
            setGameElements();
            break;
        case 30:
            playerPosition = {};
            playerPosition = {i:5, j:6};
            setGameElements();
            break;
    }

    return board;
}

//print the game board
function printBoard() {

    var createTableBoard = $('#gamePrint');
    // use the variable to store code and use it to generate the table later
    var HTMLCode = '';
    //Generate cells, give them class so that I can manipulate background pictures in the css file
    for (let i = 0; i < gameBoard.length; i++){
        HTMLCode += "<tr>";
        for (let j = 0; j < gameBoard[0].length; j++){

            let currentCell = gameBoard[i][j];
            let cellClass;

            if (currentCell.type === floor){
                cellClass = "floor";
            }else if (currentCell.type === wall){
                cellClass = "wall";
            } else if (currentCell.type === goal){
                cellClass = "goal";
            }

            if (currentCell.gameElement === player){
                cellClass = "player";
            } else if (currentCell.gameElement === box){
                cellClass = "box";
            }

            if (currentCell.type === goal && currentCell.gameElement === box)
                cellClass = "boxOnGoalSquare";
            if (currentCell.gameElement === player && currentCell.type === goal)
                cellClass = "playerOnGoalSquare";
            //Control the movement of the player and box by clicking the cell that you want to move to/push
            HTMLCode += "<td class='cell " + cellClass + "' onclick='currentPositionMoveTo("+i+","+j+")' >";
            HTMLCode += "</td>";
        }
        HTMLCode += "</tr>";
    }
    //Write HTMLCode to the table element (id: gamePrint)
    $(createTableBoard).html(HTMLCode);
    //Set table format
    $(createTableBoard).css({
        "text-align": "center",
        "margin-top": "3%",
        "margin": "0 auto"
    });
}

// Judge movement availability and actually move game element(s)
function currentPositionMoveTo(i,j) {
    // i,j here means the coordinate of "legal" (passable) target position
    var iDifference = i - playerPosition.i;
    var jDifference = j - playerPosition.j;
    var iDifferenceAbs = Math.abs(i - playerPosition.i);
    var jDifferenceAbs = Math.abs(j - playerPosition.j);

    //Judge if the target moving position is "legal" or not (only accept horizontal or vertical moving)
    if ((iDifferenceAbs === 1 && jDifference === 0) || (jDifferenceAbs === 1 && iDifference === 0)){
        if (gameBoard[i][j].type !== wall){
            let moveAvailability = true;
            if (gameBoard[i][j].gameElement === box){
                //Move the box and update step counter
                if (gameBoard[i+iDifference][j+jDifference].type !== wall && gameBoard[i+iDifference][j+jDifference].gameElement === null){
                    gameBoard[i][j].gameElement = null;
                    gameBoard[i+iDifference][j+jDifference].gameElement = box;
                    step++;
                } else {
                    moveAvailability = false;
                }
            }
            if (moveAvailability === true){
                //Moving the player and update step counter
                gameBoard[playerPosition.i][playerPosition.j].gameElement = null;
                playerPosition.i = i;
                playerPosition.j = j;
                gameBoard[playerPosition.i][playerPosition.j].gameElement = player;
                step++;
            }
        }
    }

    //Update step counter and the game board; judge if the player has won
    $("#steps").text("Steps: " + step);
    printBoard();
    checkIfWin();
}

//Use keyboard to control game element(s) movement
function checkKeyboard(event) {

    var i = playerPosition.i;
    var j = playerPosition.j;

    switch (event.keyCode) {
        case 37:
            currentPositionMoveTo(i, j-1);
            break;
        case 39:
            currentPositionMoveTo(i, j+1);
            break;
        case 38:
            currentPositionMoveTo(i-1, j);
            break;
        case 40:
            currentPositionMoveTo(i+1, j);
            break;
    }
}

//Check if all goal squares have boxes on them
function checkIfWin() {
    var ifWin = true;
    for (let i = 0; i<gameBoard.length; i++) {
        for (let j = 0; j<gameBoard[0].length; j++) {
            let currentCell = gameBoard[i][j];
            if (currentCell.type === goal && currentCell.gameElement !== box) ifWin = false;
        }
    }
    //set a delay so that player can see the final movement before the game goes to the next level
    if (ifWin) setTimeout(function () {
        currentLevel++;
        alert('You won!');
        //reset game elements
        resetLevel();
        $("#currentLevel").text("Current Level: " + currentLevel);
    },300);
}

//Player can select the level that they want to play
function switchLevel() {
    currentLevel = parseInt(document.getElementById('selection').value);
    resetLevel();
    $("#currentLevel").text("Current Level: " + currentLevel);
}

//Update the content of game board
function resetLevel() {
    gameBoard = {};
    gameBoard = buildBoard();
    printBoard();
    step = 0;
    $("#steps").text("Steps: " + step);
}