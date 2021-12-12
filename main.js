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

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("click", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workButtonContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workButtonContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one.
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("inVisible");
      } else {
        project.classList.add("inVisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
