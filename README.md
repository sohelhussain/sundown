
# Project Title: Sundown- Awwwards Website Clone Project

Hey there! Welcome to my Sundown clone project repository. In this project, I'll be using HTML, CSS, and JavaScript to recreate the Sundown website. I'll also be incorporating some awesome libraries like GSAP, ScrollTrigger, and Locomotive to add some cool effects and animations.


![Logo](https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg)


## Appendix


The goal of this project is to learn and practice front-end development skills while creating a clone of the Sundown website. By utilizing HTML, CSS, and JavaScript, along with popular libraries like GSAP and ScrollTrigger, I aim to replicate the functionality and design of the original site while also adding my own creative touches.


## Features

- Live previews
- Fullscreen mode
- Cross platform

- Responsive design to ensure compatibility across various devices and screen sizes.
- Interactive elements using JavaScript to handle user interactions.
- Smooth animations and transitions powered by GSAP and ScrollTrigger.
- Implementation of Locomotive for smooth scrolling effects.
- Use of CSS properties like skew to achieve unique visual effects.

## Dependencies

This project relies on the following dependencies:

- [GSAP](https://greensock.com/gsap/)
- [ScrollTrigger](https://greensock.com/scrolltrigger/)
- [Locomotive](https://locomotivemtl.github.io/locomotive-scroll/)

Make sure to install these dependencies before running the project.
## Run Locally

To get started with this project, follow these steps:


1. Clone this repository to your local machine.
```bash
  git clone https://github.com/sohelhussain/sundown.git
```

2. Open the project directory in your preferred code editor.
Go to the project directory

```bash
  cd my-project
```

3. Explore the HTML, CSS, and JavaScript files to understand the structure and logic of the project.

4. Install or link cdn any necessary dependencies, such as GSAP, ScrollTrigger, and Locomotive, using npm or yarn.

cdn links-

gsap

```bash
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
scrollTrigger

```bash
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Locomotive

(1) JS
```bash
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
Start the server
```
(2) CSS
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm locomotive-scroll@3.5.4/dist/locomotive-scroll.css"/>
```

and makeshore you use this loco function in JavaScript for locomotive code are working properly with scrollTrigger.

```bash
const loco = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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
};
loco();
```

5. Start the development server and preview the project in your browser.

```bash
  go live with "live server" extantion
```

6. Make modifications and enhancements as desired to personalize the project.
## Learning Lessons in Sundown Project:

Making Websites Look Good Everywhere: Ever wondered how websites magically adjust to fit your phone, iPad, or big desktop screen? You're going to learn just that! We'll delve into the art of responsive web design, ensuring your creations look stunning no matter the device.


1. **Responsive Design Mastery:** Say goodbye to wonky-looking websites on different devices! You're diving deep into the world of responsive design, where you'll learn how to make your creations look awesome on mobile, iPad, and full-screen desktops. No more squinting or awkward scrolling!

2. **Image Switcheroo:** Ever clicked on text and watched an image change right before your eyes? That's what you're going to learn next! Get ready to add some interactive flair to your website by switching images when certain text is clicked or changed. It's like magic, but with code!

3. **CSS Animation Awesomeness:** Prepare to be amazed by the power of the skew property in CSS animation. You'll learn how to create mind-bending effects that will make your website stand out from the crowd. Say hello to eye-catching animations that'll leave your visitors in awe.

4. **GSAP Loading Text Reveal:** Waiting for a website to load can be boring, right? Not anymore! With GSAP, you'll discover how to create a jaw-dropping text reveal animation that'll keep your visitors entertained while they wait. It's the perfect way to add some pizzazz to your loading screen.

5. **Swiper.js Slide Into Action:** Ever wanted to create awesome slide presentations or galleries? Well, with Swiper.js, you'll learn how to do just that! Get ready to level up your website with slick, responsive slides that'll make your content shine.

So, get ready to flex those coding muscles and unleash your creativity! With Obys Agency as your playground, you're about to become a web design rockstar. Let's do this! 🚀


## Screenshots

![App Screenshot](screenshoot/Screenshot%202024-02-14%20at%202.14.18 PM.png)

![App Screenshot](screenshoot/Screenshot%202024-02-14%20at%202.14.40 PM.png)

![App Screenshot](screenshoot/Screenshot%202024-02-14%20at%202.15.00 PM.png)

![App Screenshot](screenshoot/Screenshot%202024-02-14%20at%202.15.08 PM.png)


## Demo

Insert gif or link to demo

