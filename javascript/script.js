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

  $('.timeline-body .more-btn-asus').click(function(){
    $('#asus-content.overlay-inner').show();
  });

  $('.timeline-body .more-btn-ac').click(function(){
    $('#ac-content.overlay-inner').show();
  });

  $('.timeline-body .more-btn-bitasiaex').click(function(){
    $('#bitasiaex-content.overlay-inner').show();
  });

  $('.timeline-body .more-btn-breaktime').click(function(){
    $('#breaktime-content.overlay-inner').show();
  });

  $('.timeline-body .more-btn-actiontec').click(function(){
    $('#actiontec-content.overlay-inner').show();
  });

  $('.timeline-body .more-btn').click(function(){
    $('.overlay-ee').css('opacity', '1');
    $('.overlay-ee').css('pointer-events', 'auto');
  });

  $('.overlay-ee .close-btn').click(function(){
    $('.overlay-ee').css('opacity', '0');
    $('.overlay-ee').css('pointer-events', 'none');
    $('.overlay-inner').hide();
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

