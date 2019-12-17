
window.addEventListener('load',function(){
  document.getElementById('main-id').classList.remove('isLoading');
});


jQuery(function () {
  "use strict";
  $(function () {
      $(window).scroll(function () {  //Fonction pour déscendre la page
          if ($(this).scrollTop() > 200) {  // A 200pixels du haut de page
              $('#scrollUp').css('right', '30px');  // Replace l'image à 30pixels à droite
          } else {
              $('#scrollUp').removeAttr('style'); // Supprime les attributs CSS affectés par javascript
          }
      });
  });

  $("#scrollUp").click(function () {
    $("html, body").animate({scrollTop: 0}, "slow");
  });

  $(document).ready(function () {
    $('a[href^="#"]').on('click', function (evt) {
        evt.preventDefault();
        var target = $(this).attr('href');
        $('html, body')
            .stop()
            .animate({scrollTop: $(target).offset().top -90}, 1000);
    });
  });



  // Ferme le menu responsive quand on clique sur un lien
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });
  

  // Réduit le menu
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 60) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };

  // Réduit si la page n'est pas en haut
  navbarCollapse();

  // Réduit le menu quand on scroll la page
  $(window).scroll(navbarCollapse);
  
});