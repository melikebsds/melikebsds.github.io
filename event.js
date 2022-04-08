const colors = ['black', 'white'];
const texts = ["Aydınlık Moda Geç", "Karanlık Moda Geç"];
let index = 0;

btn.addEventListener('click', function onClick() {  
  document.body.style.background = colors[index];
  btn.textContent  = texts[index];
  index = index >= colors.length - 1 ? 0 : index + 1;
  
});
