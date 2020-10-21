//From a certain position
gsap.from('.box', {
    duration: 3,
    x: -400,
    scale: 1.6,

})

//To a certain position
gsap.to('.box', {
    duration: 3,
    x: 0,
    scale: 1,
    ease: "bounce.out"
})