window.addEventListener('load', () => {
  const unveilBtn = document.querySelector('.btn-unveil');
  const imageContainer = document.querySelector('.image-container img');

  unveilBtn.addEventListener('click', () => {
      unveilBtn.style.display = 'none';
      imageContainer.style.display = 'block';
  });
});