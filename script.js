function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

loco()

crsr = document.querySelector("#cursor")
crsrh2 = document.querySelector("#cursor h2")
nav = document.querySelector("#nav")
page1 = document.querySelector("#page1")
page2 = document.querySelector("#page2")
a1 = document.querySelector("#part1 #a1")
a2 = document.querySelector("#part1 #a2")
b1 = document.querySelector("#part2 #b1")
b2 = document.querySelector("#part2 #b2")

document.addEventListener("mousemove", function (dets) {
  crsr.style.top = `${dets.y + 10}px`
  crsr.style.left = `${dets.x + 10}px`
})

nav.addEventListener("mouseenter", function () {
  crsr.style.display = "none"
})

nav.addEventListener("mouseleave", function () {
  crsr.style.display = "flex"
})

page2.addEventListener("mouseenter", function () {
  crsrh2.innerHTML = ""
})

page2.addEventListener("mouseleave", function () {
  crsrh2.innerHTML = "SCROLL"
})

a1.addEventListener("mouseenter", function () {
  crsrh2.innerHTML = "VIEW"
  gsap.to("#part1 #a1 #rate #r1 h5", {
    opacity: 1,
    y: 0,
    duration: .8
  })
  gsap.to("#part1 #a1 #rate #r2 h5", {
    opacity: 1,
    y: 0,
    duration: .8
  })
})

a1.addEventListener("mouseleave", function () {
  crsrh2.innerHTML = ""
  gsap.to("#part1 #a1 #rate #r1 h5", {
    y: 50,
    duration: .8
  })
  gsap.to("#part1 #a1 #rate #r2 h5", {
    y: 50,
    duration: .8
  })
})

a2.addEventListener("mouseenter", function () {
  crsrh2.innerHTML = "VIEW"
  gsap.to("#part1 #a2 #rate #r1 h5", {
    opacity: 1,
    y: 0,
    duration: .8
  })
  gsap.to("#part1 #a2 #rate #r2 h5", {
    opacity: 1,
    y: 0,
    duration: .8
  })
})

a2.addEventListener("mouseleave", function () {
  crsrh2.innerHTML = ""
  gsap.to("#part1 #a2 #rate #r1 h5", {
    y: 50,
    duration: .8
  })
  gsap.to("#part1 #a2 #rate #r2 h5", {
    y: 50,
    duration: .8
  })
})

b1.addEventListener("mouseenter", function () {
  crsrh2.innerHTML = "VIEW"
  gsap.to("#part2 #a1 #rate #r1 h5", {
    opacity: 1,
    y: 0,
    duration: .8
  })
  gsap.to("#part2 #a1 #rate #r2 h5", {
    opacity: 1,
    y: 0,
    duration: .8
  })
})

b1.addEventListener("mouseleave", function () {
  crsrh2.innerHTML = ""
})

b2.addEventListener("mouseenter", function () {
  crsrh2.innerHTML = "VIEW"
})

b2.addEventListener("mouseleave", function () {
  crsrh2.innerHTML = ""
})

document.addEventListener("mousemove", function (dets) {
  page2.style.top = `${1 - dets.y * .15}px`
  page2.style.left = `${1 - dets.x * .10}px`
})

gsap.to("#page1 #in1", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top -10%",
    end: "top -20%",
    scrub: 3
  }
})

gsap.from("#page2 #part1 #a1", {
  x: "-100%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 100%",
    end: "top 80%",
    scrub: 3,
    stagger: 3
  }
})

gsap.from("#page2 #part1 #a2", {
  x: "100%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 100%",
    end: "top 80%",
    scrub: 3,
    stagger: 3
  }
})

gsap.from("#page2 #part2 #b1", {
  x: "-100%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 100%",
    end: "top 80%",
    scrub: 3,
    stagger: 3
  }
})

gsap.from("#page2 #part2 #b2", {
  x: "100%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 10%",
    end: "top 0%",
    scrub: 3,
    snap: true
  }
})

var TL = gsap.timeline()

TL.from("#page1 h1", {
  y: "200",
  opacity: 0,
  duration: 1,
})

TL.from("#nav #in1", {
  y: "20",
  opacity: 0,
  duration: 1,
  transform: `rotate(5deg)`
})

TL.from("#nav #a1", {
  y: "20",
  opacity: 0,
  duration: 1,
  transform: `rotate(5deg)`,
  delay: -.3,
})

TL.from("#nav #a2", {
  y: "20",
  opacity: 0,
  duration: 1,
  transform: `rotate(5deg)`,
  delay: -.3
})

TL.from("#nav #b1", {
  y: "20",
  opacity: 0,
  duration: 1,
  transform: `rotate(5deg)`,
  delay: -.3
})
