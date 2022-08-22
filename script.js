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
  delay: 1,
  stagger: {
    amount: 1.5,
    grid: "auto",
    from: "center",
  },
});
