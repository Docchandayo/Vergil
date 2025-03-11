let hitCount = 0;
const hitCountDisplay = document.getElementById('hitCount');

const faceImage = document.getElementById('faceImage');
const fistImage = document.getElementById('fistImage');

// Initially position the face randomly
moveFaceRandomly();

// Event listener for clicking the face
document.getElementById('gameArea').addEventListener('click', function(event) {
    if (event.target === faceImage) {
        hitCount++;
        hitCountDisplay.textContent = hitCount;
        
        // Move the face to a new random location after a "punch"
        moveFaceRandomly();
        
        // Trigger the punching animation on the face
        punchFace();
        
        // Trigger the fist animation
        punchFist();
    }
});

function moveFaceRandomly() {
    const gameArea = document.getElementById('gameArea');
    
    // Get random position for the face within the game area
    const x = Math.random() * (gameArea.offsetWidth - faceImage.offsetWidth);
    const y = Math.random() * (gameArea.offsetHeight - faceImage.offsetHeight);
    
    faceImage.style.left = `${x}px`;
    faceImage.style.top = `${y}px`;
}

function punchFace() {
    // Add the punching animation to the face
    faceImage.style.animation = 'punchAnimation 0.5s ease-out';
    
    // Reset the animation so it can be triggered again
    faceImage.addEventListener('animationend', function() {
        faceImage.style.animation = '';  // Reset animation
    });
}

function punchFist() {
    // Make fist visible and animate it
    fistImage.style.opacity = 1; // Make fist visible
    fistImage.style.animation = 'fistPunch 0.5s ease-out';
    
    // Reset fist animation after it finishes
    fistImage.addEventListener('animationend', function() {
        fistImage.style.animation = '';  // Reset fist animation
        fistImage.style.opacity = 0;    // Hide fist after punch
    });
}
