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
  $('.form').on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    $.post($form.attr('action'), $form.serialize()).then(function() {
      $('.form-content').addClass('form-content-hide');
      $('.success').addClass('success-show');
    });
    var name = $('#firstName').val();
    $('.first-name').text(document.documentElement.lang === 'es' ? '¡Gracias, ' + name + '!' : 'Thank you, ' + name + '!');
  });
  $('#whatsapp').on('blur input', function(){
    var digits = $(this).val().replace(/\D/g, '');
    if(digits.length>0){
      $(this).val('+' + digits);
    }
  });
});
var wordsEn = ['schools', 'parents', 'hospitals', 'plant managers'];
var wordsEs = ['escuelas', 'padres', 'hospitales', 'gerentes de planta'];
var words = document.documentElement.lang === 'es' ? wordsEs : wordsEn;
var index = 0;
setInterval(function() {
  index = (index + 1) % words.length;
  $('.word-shift b').removeClass('is-visible');
  $('.word-shift b').eq(index).addClass('is-visible');
}, 2000);
