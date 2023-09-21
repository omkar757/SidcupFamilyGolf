var crsr=document.getElementById("cursor")
var crsr_b=document.getElementById("cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y+"px"
    crsr_b.style.left= dets.x-200+"px"
    crsr_b.style.top= dets.y-200+"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e" 
        crsr.style.backgroundColor = "#95c11e"
        })
})
    





gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2

    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#img1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#img2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2
    }
})