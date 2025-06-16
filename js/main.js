$(document).ready(function() {
  ScrollReveal().reveal('.reveal');
  $('.slider').flickity({
    imagesLoaded: true,
    wrapAround: true,
    autoPlay: 2000
  });
  $('#cta-btn').on('click', function() {
    $('#modal').attr('aria-hidden', 'false').show();
  });
  $('#modal-close').on('click', function() {
    $('#modal').attr('aria-hidden', 'true').hide();
  });
});
var words = ['schools', 'parents', 'hospitals', 'plant managers'];
var index = 0;
setInterval(function() {
  index = (index + 1) % words.length;
  $('.clip').text(words[index]);
}, 2000);
