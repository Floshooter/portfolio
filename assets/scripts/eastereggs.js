// Easter egg #1 : Bottom right profil picture
const image = document.querySelector('.profile');
const sound = new Audio('./assets/Sound/rickroll.mp3');

let clickCount = 0;

image.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 15) {
        sound.currentTime = 0; // Réinitialiser la position de lecture du son
        sound.play();
        clickCount = 0;
    }
});

// Easter egg #2 : Special word searched
const searchInput = document.getElementById('searchInput');

// Ajoutez un écouteur d'événements pour la soumission du formulaire
searchInput.addEventListener('keydown', function(event) {
  // Vérifiez si la touche entrée est pressée (keyCode 13)
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Vérifiez si le terme de recherche est "earthquake"
    if (searchTerm === 'earthquake') {
      // Appliquez la classe de secousse à tous les éléments de la page
      const elements = document.getElementsByTagName('*');
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('shake-animation');
      }

      // Supprimez la classe de secousse après un certain délai (par exemple, 3 secondes)
      setTimeout(function() {
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove('shake-animation');
        }
      }, 3000);
    }
  }
});
// Easter egg #3 : ?
// Easter egg #4 : ?
// Easter egg #5 : ?