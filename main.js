"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log("navbarHeight : " + navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu /
  addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
      return;
    }
    scrollIntoView(link);
  });

// Handle click on "contact me" button on home
const homeContactButton = document.querySelector(".home__contact");
homeContactButton.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const about = document.querySelector(".about__container");
const aboutHeight = about.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  about.style.opacity = 1 - (window.scrollY - homeHeight) / aboutHeight;
});

const skills = document.querySelector(".skills__container");
const skillsHeight = skills.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  skills.style.opacity =
    1 - (window.scrollY - (homeHeight + aboutHeight)) / skillsHeight;
});

const work = document.querySelector(".work__container");
const workHeight = work.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  work.style.opacity =
    1 -
    (window.scrollY - (homeHeight + aboutHeight + skillsHeight)) / workHeight;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
