/**
 * Frogfrogfrog
 * Pippin Barr
 * Modded by "Anthony Patient"
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

/** 
 * Game over state <----------- use this
*/
let gameOver = false;

/**
 * Current Score and score paramitters
 */
let score = -4;
let scoreX = 10;
let scoreY = 10;
// let scoreAlignX = "LEFT";
// let scoreAlignY = "TOP";

/**
 * fly rarity <------------- use this
 */
// let rarity = 100

/**
 * fly paramitters <--------------------------------- use this and make more
 */
// let flyX = 0;
// let flyY = 200;
// let flySize = 8;
// let flySpeed = 3;

let fly1 = undefined;

let flies = [];



/**
 * the starting background and theme of the project
 */
//the starting arangment
let arrangement = 12;

/**
 * party mode variables (mainly)
 */
//the starting color of the change
let startColorRed = 135;
let startColorGreen = 207;
let startColorBlue = 235;
// the target color of the change
let targetColorRed = 0;
let targetColorGreen = 0;
let targetColorBlue = 0;
// the speed of the color change
let progressColorRed = 0;
let progressColorGreen = 0;
let progressColorBlue = 0;
// the base color that is changed
let colorRed = 135;
let colorGreen = 207;
let colorBlue = 235;
// the randomization of the speed of the change
let randomProgressRed = 0.01
let randomProgressGreen = 0.01
let randomProgressBlue = 0.01



// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 30,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
// let fly = {
//     x: 0,
//     y: 200, // Will be random
//     size: 8,
//     speed: 3
// };


/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    colorMode(RGB);

    fly1 = createFly()
    // Make the first fly
    flies.push(createFly());

    // Give the fly its first random position
    // for (fly of flys) {
    // resetFly(fly);
    // }

}

function createFly() {
    const newFly = {
        // Position and dimensions
        x: -35,
        y: random(10, 380),
        size: {
            legendary: random(6, 16),
            epic: random(6, 16),
            normal: random(6, 16),
        },

        // Colour
        fill: {
            a: random(0, 20),
            b: random(0, 20),
            c: random(0, 20),
            d: random(20, 40),
            e: random(20, 40),
            f: random(20, 40),
            g: random(40, 60),
            h: random(40, 60),
            i: random(40, 60),
        },

        // Movement
        speed: {
            x: {
                legendary: random(4, 5),
                epic: random(3, 4),
                normal: random(2, 3),
            },
            y: random(-10, 10)
        },
        rarity: 100,
    };
    return newFly;
}

/**
 * calles the difrent function that it needs to draw on each frame
 */
function draw() {



    theme();
    randomColorTheme();
    scoreConditionnals();
    moveFrog();
    moveTongue();
    drawFrog();

    for (const fly of flies) {
        moveFly(fly);
        checkTongueFlyOverlap(fly);
        drawFly(fly);
    }

    // moveFly(fly);
    // checkTongueFlyOverlap(fly);
    // drawFly(fly);

    print(arrangement)
}

/**
 * change what is in the game depending on current score
 */
function scoreConditionnals() {
    if (score <= -1000) {
        score = undefined
    }
    if (score <= -100) { // activete if score is lower that 5 <---- change score and make a loose function -25? maby
        print("game over");
        flies.push(createFly());
        flies.push(createFly());
        flies.push(createFly());
        flies.push(createFly());
        flies.push(createFly());
    }
    if (score <= -25) {
        displayScoreDeath();
    }
    if (score >= 5) { // activete if score is higher that 5
        displayScore();
    }
    if (score <= 10) { // activete if score is higher that 20
        flies[1] = (createFly());
    }
    if (score <= 25) {
        flies[2] = (createFly());
    }
    if (score <= 35) {
        flies[3] = (createFly());
    }
    if (score <= 45) {
        flies[4] = (createFly());
    }
    if (score <= 55) {
        flies[5] = (createFly());
    }
    if (score <= 65) {
        flies[6] = (createFly());
    }
    if (score <= 75) {
        flies[7] = (createFly());
    }
    if (score <= 85) {
        flies[8] = (createFly());
    }
    if (score <= 100) {
        flies[9] = (createFly());
    }
    if (score <= 500) {
        flies[10] = (createFly());
        flies[11] = (createFly());
        flies[12] = (createFly());
        flies[13] = (createFly());
        flies[14] = (createFly());
    }
    if (score >= 1000) {
        displayScore();
    }
    if (score >= 10000) {
        displayScore();
    }
    if (score >= 100000) {
        displayScore();
    }
    if (score >= 1000000) {
        displayScore();
    }
    if (score >= 10000000) {
        displayScore();
    }
    // if (score >= 10000000) { // activete if score is higher than bla bla bla  <----- need to make a win function
    // }
    //     win Game
}

/**
 * set's the general theme/background for the game
 */
function theme() {

    if (arrangement === 1) {
        background(197, 100, 70)

    }
    else if (arrangement === 2) {
        background(152, 44, 68)

    }
    else if (arrangement === 3) {
        background(292, 100, 59)

    }
    else if (arrangement === 4) {
        background(152, 50, 50)

    }
    else if (arrangement === 5) {
        background(64, 100, 50)

    }
    else if (arrangement === 6) {
        background(126, 94, 33)

    }
    else if (arrangement === 7) {
        background(22, 78, 59)

    }
    else if (arrangement === 8) {
        background(158, 100, 41)

    }
    else if (arrangement === 9) {
        background(272, 87, 45)

    }
    else if (arrangement === 10) {
        background(87, 60, 48)

    }
    //party theme
    // else if (arrangement === 11) {
    //     background(colorRed, colorGreen, colorBlue)

    // }
    else if (arrangement === 12) {
        colorMode(RGB);
        arrangement = 1

    }
    else if (arrangement === 13) {
        colorMode(HSB);
        arrangement = 1

    }
    else if (arrangement === 14) {
        colorMode(HSL);
        arrangement = 1

    }
    else if (arrangement === 11) {
        background("#87ceeb")

    }

}

/**
 * randomises the color for the party theme
 */
function randomColorTheme() {
    progressColorRed = progressColorRed += randomProgressRed
    progressColorGreen = progressColorGreen += randomProgressGreen
    progressColorBlue = progressColorBlue += randomProgressBlue


    colorRed = lerp(startColorRed, targetColorRed, progressColorRed)
    colorGreen = lerp(startColorGreen, targetColorGreen, progressColorGreen)
    colorBlue = lerp(startColorBlue, targetColorBlue, progressColorBlue)

    if (progressColorRed >= 1) {
        startColorRed = targetColorRed;
        targetColorRed = random(0, 255);
        progressColorRed = 0
        randomProgressRed = random(0.005, 0.05)
    }
    if (progressColorGreen >= 1) {
        startColorGreen = targetColorGreen;
        targetColorGreen = random(0, 255);
        progressColorGreen = 0
        randomProgressGreen = random(0.005, 0.05)
    }
    if (progressColorBlue >= 1) {
        startColorBlue = targetColorBlue;
        targetColorBlue = random(0, 255);
        progressColorBlue = 0
        randomProgressBlue = random(0.005, 0.05)
    }
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly(fly) {
    // Move the fly
    if (fly.rarity < 1) {
        fly.x += fly.speed.x.legendary;
    }
    else if (fly.rarity < 20) {
        fly.x += fly.speed.x.epic;
    }
    else {
        fly.x += fly.speed.x.normal;
    }

    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly(fly);
        if (fly.rarity < 1) {
            score = score - ceil(random(4.2, 10.4));
        }
        else if (fly.rarity < 20) {
            score = score - ceil(random(1.2, 5.4));
        }
        else {
            score = score - ceil(random(-0.2, 2.4));
        }
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly(fly) {
    if (fly.rarity < 1) {
        push();
        noStroke();
        fill(fly.fill.g, fly.fill.h, fly.fill.i);
        ellipse(fly.x, fly.y, fly.size.legendary);
        pop();
    }
    else if (fly.rarity < 20) {
        push();
        noStroke();
        fill(fly.fill.d, fly.fill.e, fly.fill.f);
        ellipse(fly.x, fly.y, fly.size.epic);
        pop();
    }
    else {
        push();
        noStroke();
        fill(fly.fill.a, fly.fill.b, fly.fill.c);
        ellipse(fly.x, fly.y, fly.size.normal);
        pop();
    }

}

/**
 * Resets the fly to the left with a random y
 */
function resetFly(fly) {
    fly.x = -20;
    fly.y = random(10, 380);

    if (fly.rarity < 1) {
        fly.size.legendary = random(2, 18);
        fly.speed.x.legendary = map(fly.size.legendary, 4, 20, random(4, 5), random(2, 3));
        // print(rarity)
        print("LEGENDARY")
    }
    else if (fly.rarity < 20) {
        fly.size.epic = random(4, 18);
        fly.speed.x.epic = map(fly.size.epic, 4, 18, random(4, 5), random(2, 3));
        // print(rarity)
        print("epic")
    }
    else {

        fly.size.normal = random(6, 16);
        fly.speed.x.normal = map(fly.size.normal, 6, 16, random(4, 5), random(2, 3));
        // print(rarity)
    }
    fly.rarity = random(0, 100);

}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    text((score), scoreX, scoreY);
    pop();
}

/**
 * Display the score (bad)
 */
function displayScoreDeath() {
    push();
    fill("red")
    textSize(48 - (score * 2));
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text((score), width / 2, height / 2);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap(fly) {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    let eaten = undefined
    if (fly.rarity < 1) {
        eaten = (d < frog.tongue.size / 2 + fly.size.legendary / 2);
    }
    else if (fly.rarity < 20) {
        eaten = (d < frog.tongue.size / 2 + fly.size.epic / 2);
    }
    else {
        eaten = (d < frog.tongue.size / 2 + fly.size.normal / 2);
    }
    if (eaten) {
        // Reset the fly
        resetFly(fly);
        // Bring back the tongue
        frog.tongue.state = "inbound";
        // change theme
        arrangement = floor(random(1, 15));
        // add to score
        if (frog.tongue.state = "inbound") {
            if (fly.rarity < 1) {
                score = score + ceil(random(4.2, 9.4));
            }
            else if (fly.rarity < 20) {
                score = score + ceil(random(1.2, 4.4));
            }
            else {
                score = score + ceil(random(-0.2, 1.4));
            }
        }
        else if (frog.tongue.state = "outbound") {
            if (fly.rarity < 1) {
                score = score + ceil(random(4.1, 9.2));
            }
            else if (fly.rarity < 20) {
                score = score + ceil(random(1.1, 4.2));
            }
            else {
                score = score + ceil(random(-0.1, 1.2));
            }
        }
        else if (frog.tongue.state = "idle") {
            if (fly.rarity < 1) {
                score = score + ceil(random(-0.1, 2.2));
            }
            else if (fly.rarity < 20) {
                score = score + ceil(random(-0.1, 1.2));
            }
            else {
                score = score + ceil(random(-0.1, 0.2));
            }
        }
        // print(ceil(random(-0.1,1.2)))
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

/**
 * rarity filter
 * 
 * if (fly.rarity < 1) {
        
    }
    else if (fly.rarity < 20) {
        
    }
    else {
        
    }
 * 
 */