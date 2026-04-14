document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  blocks.forEach((block) => observer.observe(block));
});
