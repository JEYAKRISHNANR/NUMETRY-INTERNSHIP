window.addEventListener('resize', resizeCard);

function resizeCard() {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    var width = window.innerWidth;
    if (width <= 768) {
      card.style.width = '100%';
    } else {
      card.style.width = '300px';
    }
  });
}

resizeCard(); // Call the function once on page load
