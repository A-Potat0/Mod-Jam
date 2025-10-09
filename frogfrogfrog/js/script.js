/**
 * Frogfrogfrog
 * Pippin Barr
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
 * set of variables used throught the project
 */
//the starting arangment
let arrangement = 1;

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
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}

/**
 * calles the difrent function that it needs to draw on each frame
 */
function draw() {
    theme();
    randomColorTheme()
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();


}

/**
 * set's the general theme/background for the game
 */
function theme() {

    if (arrangement === 1) {
        background("#87ceeb")

    }
    else if (arrangement === 2) {
        background("#87eb99ff")

    }
    else if (arrangement === 3) {
        background("#eb87dcff")

    }
    else if (arrangement === 4) {
        background("#eb8787ff")

    }
    else if (arrangement === 5) {
        background("#e6eb87ff")

    }
    else if (arrangement === 6) {
        background("#87ebd4ff")

    }
    else if (arrangement === 7) {
        background("#9887ebff")

    }
    else if (arrangement === 8) {
        background("#cd87ebff")

    }
    else if (arrangement === 9) {
        background("#ebc187ff")

    }
    else if (arrangement === 10) {
        background("#4f6168ff")

    }
    //party theme
    else if (arrangement === 11) {
        background(colorRed, colorGreen, colorBlue)

    }
    // else if (arrangement === ) {
    //     background("#87ceeb")

    // }
    // else if (arrangement === ) {
    //     background("#87ceeb")

    // }
    // else if (arrangement === ) {
    //     background("#87ceeb")

    // }
    // else if (arrangement === ) {
    //     background("#87ceeb")

    // }
    
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

    if(progressColorRed >= 1){
        startColorRed = targetColorRed;
        targetColorRed = random(0,255);
        progressColorRed = 0
        randomProgressRed = random(0.005, 0.05)
    }
    if(progressColorGreen >= 1){
        startColorGreen = targetColorGreen;
        targetColorGreen = random(0,255);
        progressColorGreen = 0
        randomProgressGreen = random(0.005, 0.05)
    }
    if(progressColorBlue >= 1){
        startColorBlue = targetColorBlue;
        targetColorBlue = random(0,255);
        progressColorBlue = 0
        randomProgressBlue = random(0.005, 0.05)
    }
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
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
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        // change theme
        arrangement = floor(random(1,12))
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