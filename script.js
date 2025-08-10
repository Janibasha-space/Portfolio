// script.js
// Reveal on scroll
(function(){
  const els = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver((entries, obs) => {
    for (const entry of entries){
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
})();


const scrollBtn = document.getElementById("scrollBtn");
const scrollIcon = document.getElementById("scrollIcon");

scrollBtn.addEventListener("click", function () {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let docHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= docHeight - 10) {
    // At bottom → Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Scroll down by one viewport height
    window.scrollBy({ top: windowHeight, behavior: "smooth" });
  }
});

// Change icon direction on scroll
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let docHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= docHeight - 10) {
    scrollIcon.classList.remove("fa-arrow-down");
    scrollIcon.classList.add("fa-arrow-up");
  } else {
    scrollIcon.classList.remove("fa-arrow-up");
    scrollIcon.classList.add("fa-arrow-down");
  }
});
