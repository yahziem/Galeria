const slides = document.querySelectorAll('.slide');
const phrases = document.querySelectorAll('.phrase-screen');
let currentIndex = 0;
let isShowingImage = true;

window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('backgroundMusic');
  
  // Forzar la reproducción automática al cargar la página
  const playMusic = () => {
    music.play().catch(() => {
      console.log('El navegador bloqueó la reproducción automática.');
    });
  };

  // Intentar reproducir el audio al hacer clic en cualquier parte de la página
  document.body.addEventListener('click', () => {
    music.muted = false;
    playMusic();
  });

  // Desactivar el silencio después de un breve retraso
  setTimeout(() => {
    music.muted = false;
    playMusic();
  }, 1000); // 1 segundo de retraso
});

// Función para mostrar la diapositiva activa
function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.remove('active'));
  phrases.forEach((phrase, i) => phrase.classList.remove('active'));

  if (isShowingImage) {
    slides[index].classList.add('active');
  } else {
    phrases[index].classList.add('active');
  }
}

// Función para cambiar entre imagen y frase
function nextSlide() {
  if (!isShowingImage) {
    currentIndex = (currentIndex + 1) % slides.length;
  }
  isShowingImage = !isShowingImage; // Alternar entre imagen y frase
  showSlide(currentIndex);
}

// Inicia el intervalo de cambio cada 5 segundos
setInterval(nextSlide, 5000);
  