// ===========================================================
// 1) ISMNI "YOZISH" ANIMATSIYASI
// ===========================================================
const typedNameEl = document.getElementById("typedName");
const fullName = "Ofoq Boboxonov";
let charIndex = 0;

function typeName() {
  if (charIndex <= fullName.length) {
    typedNameEl.textContent = fullName.slice(0, charIndex);
    charIndex++;
    setTimeout(typeName, 70);
  }
}
typeName();

// ===========================================================
// 2) MAVZUNI ALMASHTIRISH (DARK / LIGHT)
// ===========================================================
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorageSafeGet("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "light" ? "◑" : "◐";
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  if (next === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  themeToggle.textContent = next === "light" ? "◑" : "◐";
  localStorageSafeSet("theme", next);
});

// localStorage ba'zi muhitlarda (masalan sandbox iframe) bloklanishi mumkin,
// shuning uchun xavfsiz wrapper ishlatamiz.
function localStorageSafeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function localStorageSafeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* jim turamiz */ }
}

// ===========================================================
// 3) SCROLL-REVEAL: bo'limlar va kartalar ko'rinishda paydo bo'ladi
// ===========================================================
const revealTargets = document.querySelectorAll(
  ".card, .about__card, .about__text, .timeline, .contact__box, .skill"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const skillFills = document.querySelectorAll(".skill__fill");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));
skillFills.forEach((el) => observer.observe(el));

// ===========================================================
// 4) AKTIV NAVIGATSIYA HOLATI (scroll spy)
// ===========================================================
const sections = document.querySelectorAll("main .section, .hero");
const navLinks = document.querySelectorAll(".dock__item");

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.style.color =
            link.getAttribute("href") === `#${id}` ? "var(--accent)" : "";
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((sec) => spy.observe(sec));

// ===========================================================
// 5) ALOQA FORMASI (demo — haqiqiy backend yo'q)
// ===========================================================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  formStatus.textContent = `Rahmat, ${name}! Xabaringiz "yuborildi" (demo rejimi — backend ulanmagan).`;
  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 5000);
});

// ===========================================================
// 6) FOOTERDAGI YILNI AVTOMATIK QO'YISH
// ===========================================================
document.getElementById("year").textContent = new Date().getFullYear();
