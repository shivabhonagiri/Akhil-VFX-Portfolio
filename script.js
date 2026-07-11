// ===============================
// Akhil Bhonagiri Portfolio
// script.js
// ===============================

console.log("Welcome to Akhil Bhonagiri Portfolio");

// -------------------------------
// Smooth Scroll
// -------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// -------------------------------
// Hero Animation
// -------------------------------

const hero = document.querySelector(".hero-content");

if(hero){

    hero.style.opacity="0";

    hero.style.transform="translateY(60px)";

    setTimeout(()=>{

        hero.style.transition="1.2s";

        hero.style.opacity="1";

        hero.style.transform="translateY(0px)";

    },300);

}

// -------------------------------
// Skills Hover
// -------------------------------

document.querySelectorAll(".skill-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// -------------------------------
// Project Hover
// -------------------------------

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 0 30px cyan";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="none";

    });

});

// -------------------------------
// Navbar Background
// -------------------------------

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>100){

        nav.style.background="#000";

    }

    else{

        nav.style.background="rgba(0,0,0,.75)";

    }

});

// -------------------------------
// Scroll Reveal Animation
// -------------------------------

const reveal=document.querySelectorAll(

".about,.skills,.projects,.showreel,.contact"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

reveal.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

// -------------------------------
// Dynamic Footer Year
// -------------------------------

const year=document.getElementById("copyright");

if(year){

year.innerHTML="© "+new Date().getFullYear()+" Akhil Bhonagiri | All Rights Reserved.";

}
const menu = document.getElementById("mobile-menu");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

console.log("Portfolio Loaded Successfully");