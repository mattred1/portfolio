// adds background color on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});



var nextWord = (function () {
    var wordArray = ['a developer', 'a designer', 'a learner', 'a team leader', 'a D&D nerd', 'a cat dad'];
    var count = -1;
    return function () {
        return wordArray[++count % wordArray.length];
    }
}());





//Toggle dark/light mode
function toggleDarkLight() {
    $("body").toggleClass("light-mode")
}