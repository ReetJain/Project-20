var car, wall;

var speed, weight;

function setup() {
    
    createCanvas(400, 400);
    
    speed = random(55, 90);
    speed1 = random(100, 150);
    speed2 = random(100, 180);
    speed3 = random(30, 70);
    weight = random(400, 1500);
    
    bound = createSprite(0, 100, 1000, 5);
    bound.shapeColor = "white";
    
    bound1 = createSprite(0, 200, 1000, 5);
    bound1.shapeColor = "white";
    
    bound2 = createSprite(0, 300, 1000, 5);
    bound2.shapeColor = "white";
    
    car = createSprite(15, 50, 10, 10);
    car.shapeColor = "white";
    car.velocityX = speed;
    
    car1 = createSprite(15, 150, 10, 10);
    car1.shapeColor = "yellow";
    car1.velocityX = speed1;
    
    
    car2 = createSprite(15, 250, 10, 10);
    car2.shapeColor = "red";
    car2.velocityX = speed2;
    
    
    car3 = createSprite(15, 350, 10, 10);
    car3.shapeColor = "chartreuse";
    car3.velocityX = speed3;
    
    
    wall = createSprite(350, 50, 15, 60);
    
    wall1 = createSprite(350, 150, 15, 60);
    
    wall2 = createSprite(350, 250, 15, 60);
    
    wall3 = createSprite(350, 350, 15, 60);
}

function draw() {
    
    background(0);
    
    if(wall.x - car.x < (car.width + wall.width/2)) {
        
        car.velocityX = 0;
        
        var deformation = 0.5 * width * speed * speed/22500;
        
        if(deformation > 180) {
            
            car.shapeColor = "red";
        }
        
        if(deformation < 180 && deformation > 100) {
            car.shapeColor = "yellow";
            
        }
        
        if(deformation < 100) {
            car.shapeColor = "chartreuse"
            
        }
    }
    
    if(wall1.x - car1.x < (car1.width + wall1.width/2)) {
        
        car1.velocityX = 0;
        
        var deformation = 0.5 * width * speed1 * speed1/22500;
        
        if(deformation > 180) {
            
            car1.shapeColor = "red";
        }
        
        if(deformation < 180 && deformation > 100) {
            car1.shapeColor = "yellow";
            
        }
        
        if(deformation < 100) {
            car1.shapeColor = "chartreuse"
            
        }
    }
    
    
    if(wall2.x - car2.x < (car2.width + wall2.width/2)) {
        
        car2.velocityX = 0;
        
        var deformation = 0.5 * width * speed2 * speed2/22500;
        
        if(deformation > 180) {
            
            car2.shapeColor = "red";
        }
        
        if(deformation < 180 && deformation > 100) {
            car2.shapeColor = "yellow";
            
        }
        
        if(deformation < 100) {
            car2.shapeColor = "chartreuse"
            
        }
    }
    
    if(wall.x - car.x < (car.width + wall.width/2)) {
        
        car3.velocityX = 0;
        
        var deformation = 0.5 * width * speed3 * speed3/22500;
        
        if(deformation > 180) {
            
            car3.shapeColor = "red";
        }
        
        if(deformation < 180 && deformation > 100) {
            car3.shapeColor = "yellow";
            
        }
        
        if(deformation < 100) {
            car3.shapeColor = "chartreuse"
            
        }
    }
    
    drawSprites();
}