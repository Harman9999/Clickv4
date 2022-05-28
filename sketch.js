var PLAY = 1;
var END = 0;
var SETTINGS = 2;
let timer = 30;
//let mathz = pi.toFixed(1);
//var pi;
//let timer2 = 5;
var gameState = PLAY;
var button1;
var settings1;
var close12;
var selection12;
var option22, option11, option1, option2;
let slider;
var timelimit;
function preload(){
    Dirt1 = loadImage("Dirt.jpg");
    target = loadAnimation("Project 999-0.png", "Project 999-1.png","Project 999-2.png",
    "Project 999-3.png","Project 999-4.png","Project 999-5.png", "Project 999-6.png","Project 999-7.png",
    "Project 999-8.png","Project 999-9.png");
    target1 = loadAnimation("Project 999-3.png","Project 999-4.png","Project 999-5.png", "Project 999-6.png","Project 999-7.png");
    tense = loadImage("PLayButton.png");
    StartAni = loadAnimation("PressStart-0.png","PressStart-1.png", "PressStart-2.png", "PressStart-3.png","PressStart-4.png", "PressStart-5.png");
    backgroundv11 = loadImage("backgroundv1.jpg");
    backgroundv12 = loadImage("Nighttime.png")
    restart12 = loadImage("Restart.png");
    rainbow1 = loadImage("Rain.png");
    click = loadImage("Click.png");
    click2 = loadImage("Click2.png");
    settingsclock = loadImage("Settingclock.png");
    close1 = loadImage("close.png");
    check = loadAnimation("Check.png");
    checked = loadAnimation("Checked.png");
    arrow1 = loadImage("Arrow.png");
    music11 = loadSound("MUSIC1.mp3");

}

function setup(){
    music11.loop();
    createCanvas(1000,700);
    a = random(0, 1000);
    b = random(0, 480);
    n = 1000;
    training = createSprite(a, b, 10,10);
    training.visible = false;
    training.addAnimation("targeting", target);
    training.scale = 0.1;
    training.shapeColor = "white";
    y = circle(30,30,20);
    score = 0;
    Start = createSprite(500, 350, 25,25);
    Start.addAnimation("Animation", StartAni);
    Start.scale = 0.4;
    Start.shapeColor = "white";
    Start1 = createSprite(500, 450, 20,20);
    Start1.addImage(tense);
    Start1.scale = 0.04;
    Timerz = 0;
    ScoreCounter = 0;
    Yax = 480;
    backgroundv1 = createSprite(500, 350, 1000, 700);
    backgroundv1.addImage(backgroundv11);
    button1 = createSprite(500, 500, 10, 10);
    button1.scale = 0.25;
    button1.addImage(restart12);
    cursor1 = createSprite(10,600, 10,10);
    cursor1.addImage(rainbow1);
    cursor1.scale = 0.05;
    autroch1 = createSprite(152, 530, 10,10);
    autroch1.addAnimation("goingout", target1);
    autroch1.scale = 0.2;
    autroch1.rotation = -3;
    autroch2 = createSprite(848, 530, 10,10);
    autroch2.addAnimation("goingout", target1);
    autroch2.scale = 0.2;
    autroch2.rotation = -3;
    settings1 = createSprite(91, 625, 10,10);
    settings1.addImage(settingsclock);
    settings1.scale = 0.10;
    close12 = createSprite(948, 37, 20,20);
    close12.addImage(close1);
    close12.scale = 0.15; 

    option11 = createSprite(2000,188, 20,20);
    option11.shapeColor = "green";
    option22 = createSprite(2000, 188, 20,20);
    option22.shapeColor = "red";
    
    option1 = createSprite(2000, 188, 20,20);
    option1.addAnimation("Hello", check);
    option1.scale = 0.042;
    option2 = createSprite(2000,188, 20,20);
    option2.addAnimation("new", check);
    option2.scale = 0.042;
    option3 = createSprite(2000, 300, 20,20);
    option3.shapeColor = "red";
    option4 = createSprite(2000,300, 20,20);
    option4.shapeColor = "green";
    option5 = createSprite(2000, 300, 20,20);
    option5.shapeColor = "yellow";
    option6 = createSprite(2000, 300, 20,20);
    option6.shapeColor = "purple";
    option7 = createSprite(2000, 300, 20,20);
    option7.shapeColor = "white";
    option8 = createSprite(2000, 300, 20,20);
    option8.shapeColor = "black";
    option9 = createSprite(2000, 300, 20, 20);
    option9.shapeColor = "violet";

    option32 = createSprite(2000, 390, 20,20);
    option32.shapeColor = "red";
    option43 = createSprite(2000,390, 20,20);
    option43.shapeColor = "green";
    option54 = createSprite(2000, 390, 20,20);
    option54.shapeColor = "yellow";
    option65 = createSprite(2000, 390, 20,20);
    option65.shapeColor = "purple";
    option76 = createSprite(2000, 390, 20,20);
    option76.shapeColor = "white";
    option89 = createSprite(2000, 390, 20,20);
    option89.shapeColor = "black";
    option90 = createSprite(2000, 390, 20, 20);
    option90.shapeColor = "violet";

    fakeoption11 = createSprite(2000, 188, 20,20);
    fakeoption11.shapeColor = "green";

    settings1212 = 0;
    checking1212 = 0;
    checking2121 = 0;
    determinecolor = "white";
    determinestroke = "black";

    arrow = createSprite( 765, 90, 20,20);
    arrow.addImage(arrow1);
    arrow.scale = 0.1;

    music1 = createSprite(2000, 480, 20,20);
    music1.shapeColor = "red";
    music2 = createSprite(2000, 480,20,20);
    music2.shapeColor = "green";

    vlone = 2000;
    slider = createSlider(0, 1, 1, 0.01);
    slider.position(vlone, 10);
    slider.style('width', '100px');

    //timerlimitz = createSlider(10,90,90);
    //timerlimitz.position(vlone, 10);
    //timerlimitz.style('width', '100px');
    
    //music11.loop();
    
    textaw = 653;
    
}
function draw(){
    //console.log(timer);
    background(Dirt1);
   // music11.loop();
    console.log(timelimit);
    music11.setVolume(slider.value());
    slider.position(2000,10);
    //timerlimitz.position(2000,10);
    if(gameState === PLAY){
        if(mousePressedOver(settings1)){
            gameState = SETTINGS;
        }
        fill("white");
        stroke("Yellow")
        textSize(18);
        text("Timer: ", 822, 46);
        autroch1.visible = false;
        autroch2.visible = false;
        backgroundv1.visible = false;
        close12.x = 2000;
        button1.x = 2000;
        cursor1.x = mouseX;
        text("YOU HAVE 30 SECONDS", textaw, 161);
        //cursor1.visible = true;
        if(mousePressedOver(Start1)){
            arrow.visible = false;
            textaw = 2000;
            training.x = 500;
            training.y = 400;
            training.visible = true;
            Timerz = Timerz+1;
            Start.visible = false;
            Start.x = 2000;
            Start1.visible = false;
            Start1.x = 2000;
            settings1.x = 2000;
            //music1.stop();
            //option1.x = 2000;
            //option2.x = 2000;
        }
        
        if(mousePressedOver(training)){
            training.x = random(20, 980);
            training.y = random(60,480);
            training.rotation = n;
            n = n -50;
            score = score+1;
        }
        if(Timerz == 1){
            //stroke("blue");
            //strokeWeight(3);
            fill("white");
            stroke("Yellow")
            textSize(18);
            text(timer, 876, 46);
            //text("Timer: ", 825, 46);
            if (frameCount % 30 == 0 && timer > 0) { 
                timer --;
            }
        }
         
        if (timer == 0) {
            timer = 30;
            //if (frameCount % 180 === 0) { 
                gameState = END;
            //}
        }
    }else if(gameState === END){
        background(backgroundv11);
        reset();
        text("Press R to Restart again OR Click the button!", 500,285);

        button1.x = 500;
        if(keyDown("R") || mousePressedOver(button1)){
            gameState = PLAY;
            Start.visible = true;
            Start.x = 500;
            Start1.visible = true;
            Start1.x = 500;
            score = 0;
            //option1.x = 91;
            //option2.x = 143;
            settings1.x = 91;
            arrow.visible = true;
            textaw = 653;
        }
    }else if(gameState === SETTINGS){
        settings1212 = settings1212 + 1;
        background(backgroundv12);
        reset1();
        settings();
        close12.x = 948;
        settings1.visible = false;
        if(mousePressedOver(close12)){
            settings1.visible = true;
            option11.x = 2000;
            option22.x = 2000;
            option1.x = 2000;
            option2.x = 2000;
            option3.x = 2000;
            option4.x = 2000;
            option5.x = 2000;
            option6.x = 2000;
            option7.x = 2000;
            option8.x = 2000;
            option9.x = 2000;
            option32.x = 2000;
            option43.x = 2000;
            option54.x = 2000;
            option65.x = 2000;
            option76.x = 2000;
            option89.x = 2000;
            option90.x = 2000;
            fakeoption11.x = 2000;
            gameState = PLAY;
            Start.visible = true;
            Start.x = 500;
            Start1.visible = true;
            Start1.x = 500;
            arrow.visible = true;
            textaw = 653;
            //cursor1.visible = true;  
        }
    }
    
    
    fill("white");
    textSize(10);
    text("X: "+mouseX, 100,80);
    text("Y: "+mouseY, 100,100);
    drawSprites();
    stroke(determinestroke);
    fill(determinecolor);
    circle(mouseX, mouseY, 10);
}


function reset1(){
    //cursor1.visible = false;
    Start.visible = false;
    Start.x = 2000;
    Start1.visible = false;
    Start1.x = 2000;
}
function reset(){
    fill("black");
    //stroke("White");
    //strokeWeight(3);
    autroch1.visible = true;
    autroch2.visible = true;
    mathz = score/30;
    textAlign(CENTER, CENTER);
    textFont("Pixel Rand");
    stroke("blue");
    textSize(60);
    text("# of Targets hit: "+score, 500,130);
    textSize(30);
    stroke("yellow")
    if(score>30){
        text("   You Clicked "+mathz+"x faster than the timer", 480, 220);
    }else if(score<30){
        text("You Clicked "+mathz+"x slower than the timer", 480, 331);
    }else{
        text("You Clicked the same speed at the timer", 480, 331);
    }
    Timerz = 0
    training.visible = false;
    training.x = 2000;
    //cursor1.visible = false;
    
}

function settings(){
    option1.x = 500;
    option2.x = 550;
    option3.x = 120;
    option4.x = 170;
    option5.x = 220;
    option6.x = 270;
    option7.x = 320;
    option8.x = 370;
    option9.x = 420;
    option32.x = 120;
    option43.x = 170;
    option54.x = 220;
    option65.x = 270;
    option76.x = 320;
    option89.x = 370;
    option90.x = 420;
    arrow.visible = false;
    fakeoption11.x = 500;
    slider.position(116, 468);
    //timerlimitz.position(729, 274);
    
    

   fill("Purple");
   textSize(40);
   stroke("white");
   //strokeWeight(2);
   textFont("Times New Roman");
   text("Welcome to Settings Customize How You Feel", 150, 100);
   textSize(23);
   text("Turn Off/On Horizontal (100%) follower",90, 194);
   textSize(25);
   text("Change Color For Your Cursor", 90, 260);
   text("Outline Color For Your Cursor", 90, 350);
   text("Music Volume: "+Math.round(slider.value()* 100), 90, 440)
   //text("Set Timer Limit: "+timerlimitz.value()+"sec", 700, 250);
   //timelimit = timerlimitz.value();

   settingsQ();
}

function settingsQ(){
    if(mousePressedOver(option3)){
        determinecolor = "red";
    }else if(mousePressedOver(option4)){
        determinecolor = "green";
    }else if(mousePressedOver(option5)){
        determinecolor = "yellow";
    }else if(mousePressedOver(option6)){
        determinecolor = "purple";
    }else if(mousePressedOver(option7)){
        determinecolor = "white";
    }else if(mousePressedOver(option8)){
        determinecolor = "black";
    }else if(mousePressedOver(option9)){
        determinecolor = "violet";
    } else if(mousePressedOver(option32)){
        determinestroke = "red";
    }else if(mousePressedOver(option43)){
        determinestroke = "green";
    }else if(mousePressedOver(option54)){
        determinestroke = "yellow";
    }else if(mousePressedOver(option65)){
        determinestroke = "purple";
    }else if(mousePressedOver(option76)){
        determinestroke = "white";
    }else if(mousePressedOver(option89)){
        determinestroke = "black";
    }else if(mousePressedOver(option90)){
        determinestroke = "violet";
    }
    if(settings1212>=1 && checking1212 >=1){
        option22.x = 550;
    }
    if(settings1212>=1 && checking2121 >=1){
        option11.x = 500;
    }
    if(mousePressedOver(option1)){
        option22.x = 2000;
        option11.x = 500;
        cursor1.visible = true;
        checking1212 = 0;
        checking2121 = 1;
    }
    if(mousePressedOver(option2)){
        option22.x = 550;
        option11.x = 2000;
        cursor1.visible = false;
        checking1212 = 1;
        checking2121 = 0; 
        fakeoption11.visible = false;       
    }
}
