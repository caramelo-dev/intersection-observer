const animatedTexts = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate--active');
    } else {
      entry.target.classList.remove('animate--active');
    }
  });
});

animatedTexts.forEach(text => {
  observer.observe(text);
});