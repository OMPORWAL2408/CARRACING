canvas = document.getElementById("myCanvas");
ctx = canvas.getcontext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;
car2_height = 70;
car2_width = 120;
car2_image = "car2.jpg";
car2_x = 10;
car2_y = 100;
background_image = "download.jpg";

function add() {
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadBackground;
    background_ImgTag.src = background_image;

    car1_ImgTag = new Image();
    car1_ImgTag.onload = uploadCar1;
    car1_ImgTag.src = car1_image;

    car2_IgmTag = new Image();
    car2_IgmTag.onload = uploadCar2;
    car2_IgmTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1_ImgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2() {
    ctx.drawImage(car2_ImgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown() {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left")
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log(" key w");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log(" key a");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("key s")
    }
    if (keyPressed == '68') {
        car2_right()
        console.log("key d")
    }
}

function car1_up() {
    if (car1_y >= 0)
     {
        car1_y = car1_y - 10;
        console.log("When Up arrow key is pressed, x= " + car1_x + "  ,y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car1_down()
{
    if(car1_y <=500)
    {
        car1_y = car1_y + 10;
        console.log("When Down arrow key is pressed, x= " + car1_x + "  ,y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_left()
{
    if(car1_x <=0)
    {
        car1_x = car1_x + 10;
        console.log("When left arrow key is pressed, x= " + car1_x + "  ,y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car1_right()
{
    if(car1_x >=0)
    {
        car1_x = car1_x - 10;
        console.log("When right arrow key is pressed, x= " + car1_x + "  ,y= " + car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}


function car2_up() {
    if (car2_y >= 0)
     {
        car2_y = car2_y - 10;
        console.log("When Up arrow key is pressed, x= " + car2_x + "  ,y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

    }
}

function car2_down()
{
    if(car2_y <=500)
    {
        car2_y = car2_y + 10;
        console.log("When Down arrow key is pressed, x= " + car2_x + "  ,y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_left()
{
    if(car2_x <=0)
    {
        car2_x = car2_x + 10;
        console.log("When left arrow key is pressed, x= " + car2_x + "  ,y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function car2_right()
{
    if(car2_x >=0)
    {
        car2_x = car2_x - 10;
        console.log("When right arrow key is pressed, x= " + car2_x + "  ,y= " + car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

if(car1_x >=700)
{
    console.log("Car 1 won!");
    document.getElementById('game status').innerHTML = "Car 1 won!!!!!!!!!!!!!";
}

if(car2_x >=700)
{
    console.log("Car 2 won!");
    document.getElementById('game status').innerHTML = "Car 2 won!!!!!!!!!!!!!";
}