//Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página

const select = document.querySelector('#character-list');
const image = document.querySelector('.character-image');
let charactersData = {};

fetch('https://thronesapi.com/api/v2/Characters')
  .then((response) => response.json()) //Cuando la solicitud sea un éxito -> responde con un objeto JSON.
  .then((characters) => {
    for (const character of characters) {
      charactersData[character.id] = character.imageUrl;

      const option = document.createElement('option');
      option.value = character.id;
      option.textContent = character.fullName;
      select.appendChild(option);
    }
  })
  .catch((error) => console.log(error)); //fracaso-> manejar cualquier error.

//crear un evento para que salga la imagen en la pantalla:
select.addEventListener('change', (event) => {
  const selectId = event.target.value;
  const imageUrl = charactersData[selectId];

  if (imageUrl) {
    image.src = imageUrl;
    image.alt = event.target.options[event.target.selectedIndex].text;
  } else {
    console.error('URL de imagen no válida para el personaje seleccionado');
  }
});
