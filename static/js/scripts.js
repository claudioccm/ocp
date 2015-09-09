$(document).ready(function($) {
    $('.e-menu').click(function() {
        $('.b-menu').addClass('m-active');

        return false;
    });

    $('body:not(.b-menu)').click(function() {
        $('.b-menu').removeClass('m-active');
    });
});
