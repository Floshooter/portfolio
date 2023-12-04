// Easter egg #1 : Bottom right profil picture
const image = document.querySelector('.profile');
const ppimg = document.querySelector('.profile-image')
const sound1 = new Audio('../assets/Sound/rickroll.mp3');
const sound2 = new Audio('../assets/Sound/notification.wav');

let clickCount = 0;

function replaceImageWithGif() {
  var originalSrc = ppimg.src;
  
  // Remplacer l'image par le GIF animé
  ppimg.src = '../Image/briefcase-solid-24.png';

  // Rétablir l'image d'origine après 10 secondes
  setTimeout(function() {
    ppimg.src = originalSrc;
  }, 9000);
}


image.addEventListener('click', function() {
    clickCount++;
    console.log(clickCount)
    if (clickCount === 15) {
      replaceImageWithGif()
        sound2.play()
        sound1.currentTime = 0; // Réinitialiser la position de lecture du son
        sound1.play();

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
      sound2.play()
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

// Idée Easter-eggs:
// - Mode Novistant : Plusieurs clic sur le mode DayNight Mode, active le mode "batman"
// - Mettre le lien twitch de zenrll caché
// - Créer une barre de succès, représentant le nombre d'easter-egg trouvés.