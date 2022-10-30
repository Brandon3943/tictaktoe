const gameBoard = document.querySelector('.board');
const ctx = gameBoard.getContext('2d');
const score = document.querySelector('.score');
const button = ('.button');
const playerO = 'O'
const playerX = 'X'
let currentPLayer = playerO;
const gameHeight = gameBoard.height;
const gameWidth = gameBoard.width;
const lineColorBorder = 'teal';
const lineColor = 'white';
const gamePieceX = 'X';
const gamePieceXColor = 'red';
const lineX1 = {
    x: gameBoard.width * 0.0,
    y: gameBoard.height * 0.33,
    width: gameWidth,
    height: 4,    
}
const lineX2 = {
    x: gameBoard.width * 0.0,
    y: gameBoard.height * 0.66,
    width: gameWidth,
    height: 4,    
}
const lineY1 = {
    x: gameBoard.width * 0.33,
    y: gameBoard.height * 0.0,
    width: 4,
    height: gameHeight,    
}
const lineY2 = {
    x: gameBoard.width * 0.66,
    y: gameBoard.height * 0.0,
    width: 4,
    height: gameHeight,    
}

//create boxes 1-9
const box1 = {
    x: 25,
    y: 25,
    width: 150,
    height: 150,
}

const box2 = {
    x: 225,
    y: 25,
    width: 150,
    height: 150,
}

const box3 = {
    x: 425,
    y: 25,
    width: 150,
    height: 150,
}

const box4 = {
    x: 25,
    y: 225,
    width: 150,
    height: 150,
}

const box5 = {
    x: 225,
    y: 225,
    width: 150,
    height: 150,
}

const box6 = {
    x: 425,
    y: 225,
    width: 150,
    height: 150,
}

const box7 = {
    x: 25,
    y: 425,
    width: 150,
    height: 150,
}

const box8 = {
    x: 225,
    y: 425,
    width: 150,
    height: 150,
}

const box9 = {
    x: 425,
    y: 425,
    width: 150,
    height: 150,
}

//assigned boxed
const boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];


function testBoxArray(boxNumber) {
    ctx.strokeStyle = gamePieceX;
    ctx.fillStyle = gamePieceXColor;

    ctx.strokeRect(boxNumber.x, boxNumber.y, boxNumber.width, boxNumber.height);
    ctx.fillRect(boxNumber.x, boxNumber.y, boxNumber.width, boxNumber.height);
};


testBoxArray(boxArray[3]);

//functions

gameStart();

function gameStart() {
    drawLines();
}


function drawLines() {
    ctx.strokeStyle = lineColorBorder;
    ctx.fillStyle =  lineColor;
    
    //line 1
    ctx.strokeRect(lineX1.x, lineX1.y, lineX1.width, lineX1.height);
    ctx.fillRect(lineX1.x, lineX1.y, lineX1.width, lineX1.height);
    //line 2
    ctx.strokeRect(lineX2.x, lineX2.y, lineX2.width, lineX2.height);
    ctx.fillRect(lineX2.x, lineX2.y, lineX2.width, lineX2.height);
    //line 3
    ctx.strokeRect(lineY1.x, lineY1.y, lineY1.width, lineY1.height);
    ctx.fillRect(lineY1.x, lineY1.y, lineY1.width, lineY1.height);
    //line 4
    ctx.strokeRect(lineY2.x, lineY2.y, lineY2.width, lineY2.height);
    ctx.fillRect(lineY2.x, lineY2.y, lineY2.width, lineY2.height);
}

//boxes click XO

