const whatsappNumber = '5513997551729';

function openWhatsApp() {
  const text = encodeURIComponent('Olá! Quero saber mais sobre o Cinebox IPTV.');
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
}

function openPlayer(videoId) {
  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

function closePlayer() {
  const modal = document.getElementById('playerModal');
  const iframe = document.getElementById('playerFrame');
  iframe.src = '';
  modal.classList.remove('open');
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closePlayer();
  }
});
