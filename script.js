
// Animation for .imagecontainer
gsap.to(".imagecontainer", {
ease: Expo.easeInOut,
width: "100%",
duration: 2,
stagger: 2,
repeat: -1, // Repeat infinitely
yoyo: false, // Do not alternate direction, repeat in the same direction
});

// Initial animation for .text h1 (to make it appear)
gsap.to(".text h1", {
ease: Expo.easeInOut,
top: 0,
stagger: 2,
duration: 2, // Specify the duration for this animation
});

// Animation for .text h1 (to make it loop)
gsap.to(".text h1", {
delay: 2,                // Delay before animation starts
ease: "linear",          // Use linear easing for constant speed
top: "-100%",            // Move text up by 100%
duration: 2,             // Duration of the animation
stagger: 2,              // Stagger effect if there are multiple elements
repeat: -1,            // Repeat infinitely
yoyo: true,              // Alternate between forward and backward animation
});
