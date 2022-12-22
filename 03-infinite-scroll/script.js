const container = document.querySelector('.container');

const getTenRandomImages = () => {
  const images = [];
  for (let i = 0; i < 10; i++) {
    const image = document.createElement('img');
    image.src = `https://picsum.photos/300/300?random=${Math.random()}`;
    images.push(image);
  }
  return images;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      container.append(...getTenRandomImages());
      observer.unobserve(entry.target);
      observer.observe(container.lastElementChild);
    }
  });
});

container.append(...getTenRandomImages());
observer.observe(container.lastElementChild);