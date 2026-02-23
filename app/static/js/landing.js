document.addEventListener("DOMContentLoaded", () => {
  const landing = document.getElementById('landing');
  const container = document.getElementById('container');
  const btnStart = document.getElementById('startTour');

  //container.classList.add('hidden');

  let started = false;

  function startTour() {
    if (started) return;
    started = true;

    container.classList.remove('hidden');
    // container.classList.add('tour-visible');
    landing.classList.add('fade-out');

    setTimeout(() => startKrpanoTour(), 50);

    setTimeout(() => {
      landing?.parentNode?.removeChild(landing);
    }, 500);
  }

  btnStart.addEventListener('click', () => startTour());
});