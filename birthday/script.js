document.addEventListener("DOMContentLoaded", () => {
    const photoStack = document.getElementById("photoStack");
    
    photoStack.addEventListener("click", () => {
        // Always select the first photo in the stack
        const topPhoto = photoStack.firstElementChild;

        // Animate the top photo (move it downward slightly with rotation)
        topPhoto.style.transition = "transform 0.8s ease";
        topPhoto.style.transform = "translateY(50px) rotate(10deg)";
        
        // After the animation, reset its position and move it to the back of the stack
        setTimeout(() => {
            topPhoto.style.transition = "none";
            topPhoto.style.transform = "none";

            // Move the current top photo to the end of the stack
            photoStack.appendChild(topPhoto);
        }, 500);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const balloonContainer = document.getElementById("balloonContainer");

    // Function to create balloons
    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = Math.random() * 5 + 5 + "s";
        balloonContainer.appendChild(balloon);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 10000);
    }

    // Random color generator
    function getRandomColor() {
        const colors = ["#FF6F61", "#FFA07A", "#FFD700", "#98FB98", "#87CEEB", "#FFB6C1"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Generate balloons continuously
    function releaseBalloons() {
        setInterval(createBalloon, 300); // Creates a balloon every 300ms
    }

    releaseBalloons(); // Start releasing balloons
});
