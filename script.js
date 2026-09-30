const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const revealItems = document.querySelectorAll(".reveal, .reveal-image");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const hero = document.querySelector(".hero");
let frameRequested = false;

function updateHeroParallax() {
  frameRequested = false;
  if (reducedMotion.matches || window.innerWidth < 650) {
    hero.style.setProperty("--hero-shift", "0px");
    return;
  }
  const distance = Math.min(window.scrollY, window.innerHeight);
  hero.style.setProperty("--hero-shift", `${Math.round(distance * 0.15)}px`);
}

window.addEventListener(
  "scroll",
  () => {
    if (!frameRequested) {
      frameRequested = true;
      window.requestAnimationFrame(updateHeroParallax);
    }
  },
  { passive: true },
);
reducedMotion.addEventListener("change", updateHeroParallax);
updateHeroParallax();
