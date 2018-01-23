$(document).ready(function() {
    $('#nav_btn').click(function() {
        $('nav').slideToggle();
    }); /* When the user scrolls down 150px from the top of the document, show the button */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#up').slideDown();
        } else {
            $('#up').slideUp();
        }
    }); /* When the user clicks on the button, scroll to the top of the document*/
    $('#up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    $('#branding').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 800, function() {
                window.location.hash = hash - 60;
            });
        }
    });
    $('#Great_Way_to_Describe_Your_App .container .accordion .one').click(function() {
        $('#Great_Way_to_Describe_Your_App .container .accordion .one a span i').toggleClass("fa-minus fa-plus ");
        $('#Great_Way_to_Describe_Your_App .container .accordion .two a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Great_Way_to_Describe_Your_App .container .accordion .three a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Great_Way_to_Describe_Your_App .container .accordion .two .two_data').slideUp();
        $('#Great_Way_to_Describe_Your_App .container .accordion .three .three_data').slideUp();
        $('#Great_Way_to_Describe_Your_App .container .accordion .one .one_data').slideToggle('open');
    });
    $('#Great_Way_to_Describe_Your_App .container .accordion .two').click(function() {
        $('#Great_Way_to_Describe_Your_App .container .accordion .two a span i').toggleClass("fa-minus fa-plus ");
        $('#Great_Way_to_Describe_Your_App .container .accordion .one a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Great_Way_to_Describe_Your_App .container .accordion .three a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Great_Way_to_Describe_Your_App .container .accordion .one .one_data').slideUp();
        $('#Great_Way_to_Describe_Your_App .container .accordion .three .three_data').slideUp();
        $('#Great_Way_to_Describe_Your_App .container .accordion .two .two_data').slideToggle('open');
    });
    $('#Great_Way_to_Describe_Your_App .container .accordion .three').click(function() {
        $('#Great_Way_to_Describe_Your_App .container .accordion .three a span i').toggleClass("fa-minus fa-plus");
        $('#Great_Way_to_Describe_Your_App .container .accordion .one a span i').addClass(" fa-plus ").removeClass('fa-minus');
        $('#Great_Way_to_Describe_Your_App .container .accordion .two a span i').addClass(" fa-plus ").removeClass('fa-minus');
        $('#Great_Way_to_Describe_Your_App .container .accordion .one .one_data').slideUp();
        $('#Great_Way_to_Describe_Your_App .container .accordion .two .two_data').slideUp();
        $('#Great_Way_to_Describe_Your_App .container .accordion .three .three_data').slideToggle('open');
    });
    $('#Frequently_asked_questions .container .accordion .one').click(function() {
        $('#Frequently_asked_questions .container .accordion .one a span i').toggleClass("fa-minus fa-plus ");
        $('#Frequently_asked_questions .container .accordion .two a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Frequently_asked_questions .container .accordion .three a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Frequently_asked_questions .container .accordion .two .two_data').slideUp();
        $('#Frequently_asked_questions .container .accordion .three .three_data').slideUp();
        $('#Frequently_asked_questions .container .accordion .one .one_data').slideToggle('open');
    });
    $('#Frequently_asked_questions .container .accordion .two').click(function() {
        $('#Frequently_asked_questions .container .accordion .two a span i').toggleClass("fa-minus fa-plus ");
        $('#Frequently_asked_questions .container .accordion .one a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Frequently_asked_questions .container .accordion .three a span i').addClass("fa-plus").removeClass('fa-minus');
        $('#Frequently_asked_questions .container .accordion .one .one_data').slideUp();
        $('#Frequently_asked_questions .container .accordion .three .three_data').slideUp();
        $('#Frequently_asked_questions .container .accordion .two .two_data').slideToggle('open');
    });
    $('#Frequently_asked_questions .container .accordion .three').click(function() {
        $('#Frequently_asked_questions .container .accordion .three a span i').toggleClass("fa-minus fa-plus");
        $('#Frequently_asked_questions .container .accordion .one a span i').addClass(" fa-plus ").removeClass('fa-minus');
        $('#Frequently_asked_questions .container .accordion .two a span i').addClass(" fa-plus ").removeClass('fa-minus');
        $('#Frequently_asked_questions .container .accordion .one .one_data').slideUp();
        $('#Frequently_asked_questions .container .accordion .two .two_data').slideUp();
        $('#Frequently_asked_questions .container .accordion .three .three_data').slideToggle('open');
    });
});