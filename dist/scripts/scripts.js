// adds background color on scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});




// jQuery function to look like intro section is being typed out
//Couldn't figure out how to have them print on separate lines 
//Used fiddle https://jsfiddle.net/interdream/tQnG8/4/
// (function ($) {
//     $.fn.writeText = function (content) {
//         var contentArray = content.split(""),
//             current = 0,
//             elem = this;
//         setInterval(function () {
//             if (current < contentArray.length) {
//                 elem.text(elem.text() + contentArray[current++]);
//             }
//         }, 200);
//     };

// })(jQuery);
// $("#catdad").writeText("cat dad");
// $("#nerd").writeText("D&D nerd");
// $("#fewd").writeText("front end web developer");






 var nextWord = (function() {
    var wordArray = ['a front end web developer', 'a team leader', 'always looking to learn', 'a D&D nerd', 'a cat dad','a hat guy<br>(thanks, quarantine)'];
    var count = -1;
    return function() {
    return wordArray[++count % wordArray.length];
  }
}());





//Toggle dark/light mode
function toggleDarkLight() {
    $("body").toggleClass("light-mode")
}