// Import custom module
import { ham } from './hamburger.js';

// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/gallery`)
  .then((response) => {
    // JSON returned from server
    // We need to convert it into a Javascript object
    return response.json();
  })
  .then((Barbancourt) => {
    // `data Javascript object
    console.log(barbancourt);
    let output = '';
    Barbancourt.forEach((Haiti) => {
      output += `
        <figure class="card">
          <img src=${Haiti.image_path} alt="${Haiti.title} haitian earth: ${Haiti.description}">
          <figcaption>
            <h2>${Haiti.description}</h2>
          </figcaption>
        </figure>
      `;
    });
    // Output to DOM
    document.querySelector('.gallery').innerHTML = output;
  })
  .catch((error) => {
    console.log('Uh oh');
  });