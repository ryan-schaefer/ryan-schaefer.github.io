document.querySelectorAll('.carousel-container').forEach(container => {
  const carousel = container.querySelector('.carousel');
  const prevBtn = container.querySelector('.prevBtn');
  const nextBtn = container.querySelector('.nextBtn');
  if (!carousel || !prevBtn || !nextBtn) return; // Ensure elements exist

  let scrollAmount = 0;
  const scrollStep = 300; // Adjust this value to change the scroll amount

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollStep,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollStep,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.video').forEach(div => {
  const id = div.dataset.id;
  const width = div.dataset.width;
  const height = div.dataset.height;
  const img = document.createElement('img');
  img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  img.width = width;
  img.height = height;
  img.alt = div.dataset.desc;
  img.style.cursor = 'pointer';

  div.appendChild(img);

  img.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.width = width;
    iframe.height = height;
    iframe.frameBorder = '20';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy'; // Add lazy loading to the iframe

    div.innerHTML = ''; // Clear the div
    div.appendChild(iframe); // Add the iframe
  });
});



// Automatically add loading="lazy" to all iframes in carousels
document.querySelectorAll('.carousel').forEach(iframe => {
    iframe.setAttribute('loading', 'lazy');
});
