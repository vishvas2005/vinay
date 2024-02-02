gsap.from(".nav",{
    scale:2,
})
gsap.from(".img",{
  opacity:0,
  duration:0.5,
})
gsap.from(".logos",{
  y: 500,
  duration:0.5,
  })
gsap.from(".page2 h1",{
   scale:2,
   scrollTrigger:{
    trigger:".page2 h1",
    scroller:"body",
   }
  })
  gsap.from(".page3",{
   opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
    }
  })
  gsap.from(".videos .video1",{
    opacity:0,
     duration:5,
     scrollTrigger:{
         trigger:".videos .video1",
         scroller:"body",
     }
   })