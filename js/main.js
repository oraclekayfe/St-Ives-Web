var tl = gsap.timeline({repeat: 2, yoyo: true});

tl.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
tl.to(".logo", {duration: 1, rotation: 360});
tl.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25});
tl.to(".circle", {duration: 0.5, opacity: 0, x: 300, ease: "power3.out"})


// New 1
var tl = gsap.timeline({repeat: 2, yoyo: true});
tl.timeScale(2);

tl.from(".bg", 1, {opacity: 0})
  .from("#logo", 1,{x: -200, rotation: -90, scale: 0, ease:Back.easeOut})
  .from("#address", 1, {x: "+=100", opacity:0, ease: Back.easeOut})

// Carousel Text
CSSPlugin.defaultTransformPerspective = 700;

var tl = new TimelineLite();
timeline.from(".logo", .5, {opacity:0, scale:.6, rotationX:60, rotationY:25, rotation:40});
tl.staggerFrom("animate-in", .5, {opacity:0, y:100, scale:.9}, .1, .1)