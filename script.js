document.addEventListener('DOMContentLoaded', function () 
{
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle.querySelector('i');
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      // Swap icon based on mode
      if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    });

// Navbar scroll logic
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

//make footer links inactive
document.querySelectorAll('.footer-col a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // disable actual navigation
  });
});

gsap.from(".hero-card", {
  opacity: 0,
  y: 80,
  duration: 1.1,
  ease: "power2.out.out",
  scrollTrigger: {
    trigger: ".hero-card",
    start: "top 85%",
  }
});
gsap.from(".working-text", {
  opacity: 0,
  y: 80,
  duration: 1.1,
  ease: "power.out.out(1.7)",
  scrollTrigger: {
    trigger: ".working-text",
    start: "top 85%",
  }
});
gsap.from(".steps-container .step-card", {
  opacity: 0,
  y: 40,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".steps-container",
    start: "top 90%",
  }
});

gsap.from(".banner-card", {
  opacity: 0,
  x: -60,
  duration: 1.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".banner-card",
    start: "top 80%",
  }
});

gsap.from(".about", {
  opacity: 0,
  y: 90,
  duration: 2.0,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 85%",
  }
});
gsap.from(".feature-text", {
  opacity: 0,
  y: 80,
  duration: 1.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".feature-text",
    start: "top 85%",
  }
});
gsap.from(".feature-card", {
  opacity: 0,
  y: 60,
  duration: 1.1,
  stagger: 0.1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".feature-container",
    start: "top 90%",
  }
});
gsap.from(".pricing-text", {
  opacity: 0,
  y: 80,
  duration: 1.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".pricing-text",
    start: "top 85%",
  }
});
gsap.from(".pricing-card", {
  opacity: 0,
  y: 70,
  duration: 1.1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".pricing-cards",
    start: "top 90%",
  }
});
gsap.from(".signin-form", {
  opacity: 0,
  y: 60,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".signin-form",
    start: "top 85%",  
  }
});
gsap.to(".error-container", {
  opacity: 0,
  duration: 1.,
  repeat: -1,      
  yoyo: true,      
  ease: "power4.inOut"
});
});

