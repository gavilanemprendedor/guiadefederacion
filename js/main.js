var ICONOS = {
  home: "M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6",
  heart: "M12 21s-7-4.35-9.5-9C.7 8.1 3 4 7 4c2 0 4 1.5 5 3.5C13 5.5 15 4 17 4c4 0 6.3 4.1 4.5 8-2.5 4.65-9.5 9-9.5 9Z",
  utensils: "M6 3v7a2 2 0 0 0 2 2v9M6 3v7M9 3v7M6 10h3M15 3c-1.5 0-2.5 2-2.5 4.5S13.5 12 15 12s2.5-2 2.5-4.5S16.5 3 15 3ZM15 12v9",
  basket: "M4 8h16l-1 12H5L4 8ZM8 8V6a4 4 0 0 1 8 0v2",
  shield: "M12 3l8 3v6c0 4.5-3 8-8 9-5-1-8-4.5-8-9V6l8-3ZM9 12l2 2 4-4",
  party: "M4 21l3-9 9-9 5 5-9 9-9 3ZM14 4l6 6M11 8l5 5",
  music: "M9 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM18 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM11.5 18V6l7-1.5v10",
  bag: "M6 8V6a4 4 0 0 1 8 0v2M4 8h12l1 12H3L4 8Z",
  ticket: "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z",
  dumbbell: "M6 7v10M18 7v10M2 12h2M20 12h2M6 12h12",
  book: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5ZM20 18H6.5A2.5 2.5 0 0 0 4 20.5",
  building: "M4 21V5a1 1 0 0 1 1-1h6v17M13 21V9h6a1 1 0 0 1 1 1v11M8 8h.01M8 12h.01M8 16h.01",
  sparkle: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2",
  laptop: "M4 5h16v9H4zM2 18h20",
  newspaper: "M4 4h13a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V4ZM7 8h7M7 11h7M7 14h4",
  truck: "M2 8h11v8H2zM13 11h4l4 3v2h-8zM6 19a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM17 19a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z",
  paint: "M3 3h14v6H3zM7 9v9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9",
  cup: "M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8ZM16 9h2a2 2 0 0 1 0 4h-2M8 3v2M12 3v2",
  meat: "M8 15c-2 0-4-1.5-4-4 0-4 4-7 8-7s7 3 7 6-3 5-6 5c-1 2-3 4-5 4-1.5 0-2-1-2-2 0-1 1-1.5 2-2Z",
  bread: "M4 12c0-4 3.5-7 8-7s8 3 8 7-3.5 5-8 5-8-1-8-5ZM8 9v6M12 8v7M16 9v6",
  paw: "M8 9a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 8 9ZM16 9a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 16 9ZM5 13a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 5 13ZM19 13a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 19 13ZM12 20c-3 0-5-1.8-5-4 0-2.5 2.2-3.5 5-3.5s5 1 5 3.5c0 2.2-2 4-5 4Z",
  cross: "M12 4v16M4 12h16",
  car: "M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11M4 11h16v5H4zM7 19v-3M17 19v-3M7.5 14h9",
  washer: "M4 4h16v16H4zM12 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7 6h.01M10 6h.01",
  wrench: "M14.7 6.3a4 4 0 0 1-5.1 5.1L4 17l3 3 5.6-5.6a4 4 0 0 0 5.1-5.1l-2.8 2.8-2.2-.5-.5-2.2 2.8-2.8Z",
  hammer: "M9.5 14.5 4 20l-1-1 5.5-5.5M13 4l7 7-2.5 2.5-7-7L13 4ZM10.5 9.5l-2-2 2.5-2.5 2 2",
  gift: "M4 8h16v4H4zM6 8V6a2 2 0 0 1 4 0v2M14 8V6a2 2 0 0 1 4 0v2M6 12v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7M12 8v12",
  leaf: "M20 4c0 9-6 15-15 15-.3-9 6-15 15-15ZM5 19c1-4 4-8 9-10"
};

function iconSvg(nombre, sizeClass) {
  var d = ICONOS[nombre] || ICONOS.bag;
  return '<svg class="' + (sizeClass || "w-6 h-6") + ' text-[#12798c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="' + d + '"/></svg>';
}

function initReveal() {
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.remove("opacity-0", "translate-y-6");
    });
  }
}

document.addEventListener("DOMContentLoaded", initReveal);
