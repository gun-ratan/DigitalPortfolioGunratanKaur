/* Typing effect (Typed.js) */
const typedTarget = document.getElementById("typed");
if (typedTarget && window.Typed) {
  new Typed("#typed", {
    strings: [
      "Web & UI Developer",
      "Automation & Systems Integrations",
      "Data-aware Builder"
    ],
    typeSpeed: 45,
    backSpeed: 22,
    backDelay: 1100,
    loop: true,
    smartBackspace: true
  });
}

/* Footer year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* Scroll reveal */
/* Scroll reveal */
const revealEls = Array.from(document.querySelectorAll(".reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

/* Active nav link highlight */
const sections = Array.from(document.querySelectorAll("section.section, header.section"));
const navLinks = Array.from(document.querySelectorAll(".navbar .nav-link"));

function setActiveLink(id) {
  navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) setActiveLink(visible.target.id);
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.12, 0.2, 0.35, 0.5] }
);
sections.forEach((s) => sectionObserver.observe(s));

/* Project filtering */
const filterButtons = Array.from(document.querySelectorAll(".btn-filter"));
const projectCards = Array.from(document.querySelectorAll(".project-card"));

function applyFilter(tag) {
  projectCards.forEach((card) => {
    const tags = (card.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
    const show = tag === "all" ? true : tags.includes(tag);
    card.parentElement.style.display = show ? "" : "none";
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilter(btn.dataset.filter);
  });
});

/* Project modal buttons */
function setButtonState(btn, url) {
  const hasUrl = Boolean(url && url.trim().length > 0);

  if (hasUrl) {
    btn.style.display = "inline-block";
    btn.href = url;
    btn.removeAttribute("aria-disabled");
    btn.classList.remove("disabled");
    btn.tabIndex = 0;
  } else {
    btn.style.display = "none";
    btn.href = "#";
    btn.setAttribute("aria-disabled", "true");
    btn.classList.add("disabled");
    btn.tabIndex = -1;
  }
}

/* Project modal population */
const modal = document.getElementById("projectModal");
if (modal) {
  modal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    if (!trigger) return;

    const title = trigger.getAttribute("data-title") || "Project";
    const subtitle = trigger.getAttribute("data-subtitle") || "";
    const tech = trigger.getAttribute("data-tech") || "";
    const bullets = (trigger.getAttribute("data-bullets") || "").split("|").filter(Boolean);
    const github = (trigger.getAttribute("data-github") || "").trim();
    const live = (trigger.getAttribute("data-live") || "").trim();
    const notes = trigger.getAttribute("data-notes") || "";

    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalSubtitle").textContent = subtitle;
    document.getElementById("modalTech").textContent = tech;
    document.getElementById("modalNotes").textContent = notes;
    document.getElementById("modalGithub").addEventListener("click", function(e) 
      {
     e.stopPropagation();
         });

document.getElementById("modalLive").addEventListener("click", function(e) {
  e.stopPropagation();
});
    const ul = document.getElementById("modalBullets");
    ul.innerHTML = "";
    bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });

    const githubBtn = document.getElementById("modalGithub");
    const liveBtn = document.getElementById("modalLive");

    // disable if empty OR placeholder text
    setButtonState(githubBtn, github.startsWith("http") ? github : "");
setButtonState(liveBtn, live.startsWith("http") ? live : "");
}

/* Keyboard accessibility: Enter opens modal */
projectCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      e.stopPropagation();
      return;
    }
  });
});
document.querySelectorAll(".experience-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});
