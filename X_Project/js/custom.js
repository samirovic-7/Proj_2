$(document).ready(function() {
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    $(window).on('load',function(){
        $('#overlay').css('display','none');
    });
    $(window).scroll(function(){
       if($(this).scrollTop() > 40)
        {
            $('#goTop').fadeIn();       
        }else{
            $('#goTop').fadeOut();
        }
    });
    $('#goTop').click(function(){
        $('html, body').animate({scrollTop : 0},2000);
    });
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('.nav').addClass('black');
        }
        else{
            $('.nav').removeClass('black');
        }
    })
    $('.fa-bars').on('click',function(){
        $('#leftNavbar').toggleClass('visible');
        if($('#leftNavbar').hasClass('visible'))
            {
                $('#leftNavbar').animate({
                    right: 0
                },500);  
            }
        else{
            
            $('#leftNavbar').animate({
                    right: '-220px'
                },500);
        }
    });
    var placeholderCache = '';
    $('[placeholder]').focusin(function(){
        placeholderCache = $(this).attr('placeholder');
        $(this).attr('placeholder','');
    });
    $('[placeholder]').focusout(function(){
        $(this).attr('placeholder',placeholderCache);
    });
    
   $('[required]').blur(function(){
       if($(this).val() == '')
           {
               $(this).next('span').fadeIn(500);
           }
       else{
           $(this).next('span').fadeOut(500);
       }
   })
    
});
