// Optional: Add JavaScript for additional interactivity or animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.classList.add("hidden");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(section);
  });
});
