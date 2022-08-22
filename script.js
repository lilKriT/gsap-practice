gsap.to(".sphere", {
  duration: 1,
  scale: 0.2,
  y: -100,
  opacity: 0,
  stagger: 0.2,
  repeat: -1,
  yoyo: true,
});

gsap.to(".matrix .square", 1, {
  scale: 0.1,
  y: 60,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  opacity: 0,
  delay: 1,
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});

let controlledAnimation = gsap.fromTo(
  ".controlled",
  {
    x: -100,
  },
  {
    duration: 2,
    x: 100,
    repeat: -1,
    yoyo: true,
    paused: true,
    ease: "none",
  }
);
controlledAnimation.seek(1);

let startButton = document.querySelector("#startButton");
let stopButton = document.querySelector("#stopButton");

startButton.addEventListener("click", () => controlledAnimation.resume());
stopButton.addEventListener("click", () => controlledAnimation.pause());
