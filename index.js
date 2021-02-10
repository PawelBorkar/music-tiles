window.addEventListener("load", () => {
    const sounds = document.querySelector(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = [
        "rgb(173, 255, 47)",
        "rgb(255, 155, 233)",
        "rgb(255, 233, 133)",
        "rgb(243, 111, 150)",
        "rgb(150, 255, 255)",
        "rgb(158, 200, 255)",
    ];

    window.onload = function () {
        Particles.init({
            selector: ".background",
        });
    };

    //Sound here

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    //Function which makes Bubbles

    const createBubbles = () => {
        const bubble = document.createElementj("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationed", function () {
            visual.removeChild(this);
        });
    };
});
