$(document).ready(function(){
    $nav = $('.nav-bar');
    $toggleCollapes = $('.toggle-collapse');

    $toggleCollapes.click(function(){
        $nav.toggleClass('collapse');
    })
});