const button = document.querySelector('#button');

button.addEventListener('click', () => {
  button.innerText = 'Button Clicked!';
  
  window.setTimeout(() => {
    button.innerText = '"click" me';
  }, 2000);
});
