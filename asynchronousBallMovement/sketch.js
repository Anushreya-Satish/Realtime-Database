var hyponoticBall , database, position;

function setup(){
    database = firebase.database();
    console.log(database);

    createCanvas(500,500);
    hyponoticBall = createSprite(250,250,10,10);
    hyponoticBall.shapeColor = "red";

    var hyponoticBallPosition = database.ref("ball/position");
    hyponoticBallPosition.on("value",readPostion,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    hyponoticBall.x = position.x;
    hyponoticBall.y = position.y;
}