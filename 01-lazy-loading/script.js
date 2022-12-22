const images = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      image.classList.remove('lazy');
      observer.unobserve(image);
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});