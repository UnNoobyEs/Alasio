//line menu
$(document).ready(function(){
    $('.menu li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

//scroll menu

window.onscroll = function showHeader() {
    let header = document.querySelector('header');

    if(window.pageYOffset > 10) {
        header.classList.add('header_fix');
    } else {
        header.classList.remove('header_fix');
    }
}
