window.addEventListener('load', () => {
  const unveilBtn = document.querySelector('.btn-unveil');
  const unveilBtn2 = document.querySelector('.btn-unveil2');
  const imageContainer = document.querySelector('.image-container img');
  const imageContainer2 = document.querySelector('.image-container-2 img');

  const handleClick = (button, imageContainer) => {
    button.style.display = 'none';
    imageContainer.style.display = 'block';
  };

  unveilBtn.addEventListener('click', () => handleClick(unveilBtn, imageContainer));
  unveilBtn2.addEventListener('click', () => handleClick(unveilBtn2, imageContainer2));
});