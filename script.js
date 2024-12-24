const slides = document.querySelectorAll('.slide');
const phrases = document.querySelectorAll('.phrase-screen');
let currentIndex = 0;
let isShowingImage = true;
let intervalId;

window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('backgroundMusic');
  const playButton = document.getElementById('playButton');

  // Asegúrate de que todo esté oculto inicialmente
  slides.forEach(slide => slide.style.display = 'none');
  phrases.forEach(phrase => phrase.style.display = 'none');
  
  // Función para iniciar la presentación
  const startPresentation = () => {
    playMusic(); // Inicia la música
    playButton.style.display = 'none'; // Ocultar el botón
    showSlide(currentIndex); // Mostrar la primera diapositiva
    intervalId = setInterval(nextSlide, 5000); // Iniciar el cambio automático para imágenes
  };

  // Función para reproducir la música
  const playMusic = () => {
    music.muted = false;
    music.play().catch(() => {
      console.log('El navegador bloqueó la reproducción automática.');
    });
  };

  // Asignar evento al botón
  playButton.addEventListener('click', startPresentation);
});

// Función para mostrar la diapositiva activa
function showSlide(index) {
  slides.forEach((slide, i) => slide.style.display = 'none');
  phrases.forEach((phrase, i) => phrase.style.display = 'none');

  if (isShowingImage) {
    slides[index].style.display = 'flex'; // Mostrar imagen
  } else {
    phrases[index].style.display = 'flex'; // Mostrar frase
  }
}

// Función para cambiar entre imagen y frase
function nextSlide() {
  if (isShowingImage) {
    // Cambiar a frase después de 5 segundos
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 12000); // Cambiar a texto después de 14 segundos
  } else {
    // Cambiar a imagen después de 14 segundos
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000); // Cambiar a imagen después de 5 segundos
    currentIndex = (currentIndex + 1) % slides.length;
  }
  isShowingImage = !isShowingImage; // Alternar entre imagen y frase
  showSlide(currentIndex);
} 