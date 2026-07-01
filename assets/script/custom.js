function containerMargin(){
  var windowWidth = $(window).width();

  if( windowWidth > 992 ){
    var containerMargin = $('.container-extended').css('margin-left');
    $('.container-margin-left').css('padding-left', containerMargin);
  }
}

function equalHeightDivs(){
  /******equal height divs****/
  // Select and loop the container element of the elements you want to equalise
    $('.slick-slider').each(function(){

      // Cache the highest
      var highestHeading = 0;
      // Select and loop the elements you want to equalise
      $('h3', this).each(function(){
        //reset the box height for the calculation
        $('h3',this).height('auto');
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestHeading) {
          highestHeading = $(this).height();
        }
      });
      $('h3',this).height(highestHeading);


      var highestContent = 0;
      // Select and loop the elements you want to equalise
      $('p', this).each(function(){

        //reset the height in case it's changed due to the funciton running on window size change
        $('p',this).height('auto');

        //hide empty paragraphs inserted by the cms
        $('p').filter(function () { return $.trim(this.innerHTML) == "" }).addClass('d-none');

        // If this box is higher than the cached highest then store it
        if($(this).height() > highestContent) {
          highestContent = $(this).height();
        }

      });
      // Set the height of all those children to whichever was highest
      $('p',this).height(highestContent);


      var highestButton = 0;
      // Select and loop the elements you want to equalise
      $('.line-before', this).each(function(){

        $('.line-before',this).height('auto');

        // If this box is higher than the cached highest then store it
        if($(this).height() > highestButton) {
          highestButton = $(this).height();
        }

      });
      // Set the height of all those children to whichever was highest
      $('.line-before',this).height(highestButton).addClass('d-block');

    });
}



$(document).ready(function(){
  function setSideMenu(open){
    var sideMenu = $('#sideMenu');
    var backdrop = $('.side-menu-backdrop');
    sideMenu.toggleClass('is-open', open).attr('aria-hidden', open ? 'false' : 'true');
    $('.js-side-menu-toggle').attr('aria-expanded', open ? 'true' : 'false');
    backdrop.prop('hidden', !open);
    $('body').toggleClass('side-menu-open', open);
  }

  $('.js-side-menu-toggle').click(function(e){
    e.preventDefault();
    setSideMenu(!$('#sideMenu').hasClass('is-open'));
  });

  $('.js-side-menu-close').click(function(e){
    e.preventDefault();
    setSideMenu(false);
  });

  function showSearchTooltip(form, message){
    var tooltip = form.find('.search-tooltip');
    var existingTimeout = tooltip.data('timeout');

    if(!tooltip.length){
      tooltip = $('<div class="search-tooltip" role="status" aria-live="polite"></div>');
      form.find('.input-icons').append(tooltip);
    }

    clearTimeout(existingTimeout);
    tooltip.text(message).addClass('is-visible');
    tooltip.data('timeout', setTimeout(function(){
      tooltip.removeClass('is-visible');
    }, 2500));
  }

  $('.top-bar .search-bar form').submit(function(e){
    var form = $(this);
    var keywords = $(this).find('input[name="keywords"]');
    var searchTerm = $.trim(keywords.val());

    if(searchTerm.length < 3){
      e.preventDefault();
      keywords.focus();
      showSearchTooltip(form, 'Search terms must be at least 3 characters long');
    }
  });

  $(document).keyup(function(e){
    if(e.key === 'Escape'){
      setSideMenu(false);
    }
  });

  //home book now form
  $('#minusAdult').click(function(e){
    e.preventDefault();
    var numberAdults = $('#numberAdults');
    var adultVal = parseInt(numberAdults.val());
    var newAdults = adultVal -1;
    if(adultVal > 0 ){
      numberAdults.val(newAdults);
    }
  });

  $('#plusAdult').click(function(e){
    e.preventDefault();
    var numberAdults = $('#numberAdults');
    var adultVal = parseInt(numberAdults.val());
    var newAdults = adultVal + 1;
    numberAdults.val(newAdults);
  });

  $('#minusChild').click(function(e){
    e.preventDefault();
    var numberChild = $('#numberChild');
    var childVal = parseInt(numberChild.val());
    var newChild = childVal -1;
    if(childVal > 0 ){
      numberChild.val(newChild);
    }
  });

  $('#plusChild').click(function(e){
    e.preventDefault();
    var numberChild = $('#numberChild');
    var childVal = parseInt(numberChild.val());
    var newChild = childVal + 1;
    numberChild.val(newChild);
  });

  //white bg transition on menu
  $('.navbar-collapse').on('show.bs.collapse', function(){
    $('.menu-cont').addClass('bg-white');
    $('.hero').addClass('hero-padding');
  });
  $('.navbar-collapse').on('hide.bs.collapse', function(){
    $('.menu-cont').removeClass('bg-white');
    $('.hero').removeClass('hero-padding');
  });


  ///************Pause video when modal is hidden***********///
  var videoSrc;
  $('.modal').on('shown.bs.modal', function(){
    videoSrc = $(this).find('iframe').attr('src');
  });
  $('.modal').on('hide.bs.modal', function(){
    $(this).find('iframe').attr('src',videoSrc);
  });

  containerMargin();
  //equalHeightDivs();
  $(window).resize();

});//document ready




$(window).resize(function(){

  containerMargin();
  //equalHeightDivs();

});






  //smoothscroll links
  jQuery($ => {
    // The speed of the scroll in milliseconds
    const speed = 1000;

    $('a[href*="#"]')
      .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
      .unbind('click.smoothScroll')
      .bind('click.smoothScroll', event => {
        const targetId = event.currentTarget.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
        }
      });
  });
