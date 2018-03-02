$(document).ready(function(){


  $('#menu-toggle').click(function(){
    $('header').css('transform', 'translateX(0)')
    $(this).css('display', 'none');
    $('#menu-cancel').css('display', 'block');
  });

  $('#menu-cancel').click(function(){
    $('header').css('transform', 'translateX(100%)')
    $(this).css('display', 'none');
    $('#menu-toggle').css('display', 'grid');
  });

  $('.timeline-body .more-btn').click(function(){
    $('.overlay-ee').css('display', 'block');
  });

  $('.overlay-ee .close-btn').click(function(){
    $('.overlay-ee').css('display', 'none');
  });

  window.sr = ScrollReveal();

  sr.reveal('#about',{ duration: 1000});
  sr.reveal('#summary',{ delay: 500, duration: 1000});
  sr.reveal('#summary',{ delay: 500, duration: 1000});
  sr.reveal('.timeline li.timeline-forwrad .timeline-panel',{origin:'left', duration: 1500, distance: '200px'});
  sr.reveal('.timeline li.timeline-inverted .timeline-panel',{origin:'right', duration: 1500, distance: '200px'})
  sr.reveal('.work-item',{ duration: 1500});
  sr.reveal('.skill-panel',{ duration: 1500});
  sr.reveal('.contact-form',{ duration: 1000});
});
