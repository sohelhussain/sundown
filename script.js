function locoScrolling() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
// locoScrolling();
const hoverDisplay = () => {
  document
    .querySelector(`#container-four`)
    .addEventListener("mouseenter", () => {
      document.querySelector(`#fixed`).style.display = "block";
    });
  document
    .querySelector(`#container-four`)
    .addEventListener("mouseleave", () => {
      document.querySelector(`#fixed`).style.display = "none";
    });
};
hoverDisplay();
const sweeping = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
  });
};
sweeping();
const viweImage = () => {
  const display = document.querySelectorAll(`.display`);
  display.forEach((dets) => {
    dets.addEventListener("mousemove", () => {
      const imges = dets.getAttribute("data-img");
      document.querySelector(`#fixed`).style.backgroundImage = `URL(${imges})`;
    });
  });
};
viweImage();

const viwe = () => {
  document.querySelector(`.top-text`).addEventListener("click", (dets) => {
    // update the image and change the color of h1 while pressing the h1
    if (dets.target.innerHTML === "Design") {
      console.log(dets.target.innerHTML);
      document.querySelector(`.top-line .innner-line`).style.transform =
        "translate(0%, 0%)";
      document.querySelector(`.top-line .innner-line`).style.top = `0%`;
      document.querySelector(`.top-text h1:nth-child(1)`).style.color = `white`;
      document.querySelector(
        `.top-text h1:nth-child(3)`
      ).style.color = `#504A45`;
      document.querySelector(
        `.top-text h1:nth-child(2)`
      ).style.color = `#504A45`;
      document
        .querySelector(`.img_fev>img`)
        .setAttribute(
          "src",
          `https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project.webp`
        );
      document.querySelector(
        `.text-down`
      ).innerHTML = `Our team works with our clients to refine an idea 
            and concept into an executable design. We create 
            a final design that encompasses the brand 
            narrative to bring stories to life and provide end- 
            to-end design solutions from concept, design, and 
            architectural drawings to 3D renderings.`;
      
      // document.querySelector(`.right-cont`).style.backgroundImage = `URL(${})`;
    } else if (dets.target.innerHTML === "Project") {
      document.querySelector(
        `.top-text h1:nth-child(1)`
      ).style.color = `#504A45`;
      document.querySelector(`.top-text h1:nth-child(2)`).style.color = `white`;
      document.querySelector(
        `.top-text h1:nth-child(3)`
      ).style.color = `#504A45`;
      document.querySelector(`.top-line .innner-line`).style.top = `25%`;
      document.querySelector(`.top-line .innner-line`).style.transform =
        "translate(0%, 25%)";
      document
        .querySelector(`.img_fev>img`)
        .setAttribute(
          "src",
          `https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp`
        );
      document.querySelector(
        `.text-down`
      ).innerHTML = `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`;
      flag = 2;
      // document.querySelector(`.right-cont`).style.backgroundImage = `URL(${https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp})`;
      console.log(dets.target.innerHTML);
    } else if (dets.target.innerHTML === "Execution") {
      document.querySelector(
        `.top-text h1:nth-child(2)`
      ).style.color = `#504A45`;
      document.querySelector(
        `.top-text h1:nth-child(1)`
      ).style.color = `#504A45`;
      document.querySelector(`.top-text h1:nth-child(3)`).style.color = `white`;
      document.querySelector(`.top-line .innner-line`).style.top = `50%`;
      document.querySelector(`.top-line .innner-line`).style.transform =
        "translate(0%, 50%)";
      document
        .querySelector(`.img_fev>img`)
        .setAttribute(
          "src",
          `https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution.webp`
        );
      document.querySelector(
        `.text-down`
      ).innerHTML = `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`;
    
    }
  });
};
viwe();
const viweCursor = () => {
  const cursor = document.querySelector(`#swiping-cursor`);
  const main = document.querySelector(`#main`);
  const swiper = document.querySelector(`.swiper`);
  main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      left: dets.x + "px",
      top: dets.y + "px",
    });
  });
  swiper.addEventListener("mouseenter", () => {
    cursor.style.display = `block`;
    cursor.style.opacity = `1`;
    cursor.style.scale = `1`;
    cursor.style.cursor = `none`;
  });
  swiper.addEventListener("mouseleave", () => {
    cursor.style.cursor = `inherit`;
    cursor.style.display = `none`;
    cursor.style.opacity = `0`;
    cursor.style.scale = `0`;
  });
};
viweCursor();

gsap.to("#main", {
  top: "-100vh",
  scrollTrigger: {
    scroller: "body",
    trigger: ".container-five",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
  },
});
let tl = gsap.timeline();
tl.from(".hed-fev", {
  opacity: 0,
  stagger: 0.3,
});
tl.to(".hed-fev", {
  // x:-100,
  opacity: 0,
  // duration:.5,
  stagger: 0.3,
});
tl.from(".hed-sec", {
  // x:100,
  opacity: 0,
  // duration:.5,
  stagger: 0.3,
});
tl.to(".hed-sec", {
  // x:-100,
  opacity: 0,
  // duration:.5,
  stagger: 0.3,
});
tl.from(".hed-thi", {
  // x:100,
  opacity: 0,
  // duration:.5,
  stagger: 0.3,
});
tl.to(".hed-thi", {
  // x:-100,
  opacity: 0,
  // duration:.5,
  stagger: 0.3,
});
tl.to("#loder", {
  display: "none",
});
