$(document).ready(function(){
    $('.main_text').click(function(){
        $(this).children().toggleClass('on');
        $('.list_box').slideToggle('fast');
    });

    $('.list_box > li a').each(function() {
    $(this).attr('target', '_self');
    });



});