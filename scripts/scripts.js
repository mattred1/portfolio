// Toggle light & dark mode
const toggleColorMode = (e) => {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden")) {
        // Sets the custom HTML attribute
        document.documentElement.setAttribute("color-mode", "light");

        //Sets the user's preference in local storage
        localStorage.setItem("color-mode", "light")
        return;
    }

    /* Switch to Dark Mode
    Sets the custom HTML attribute */
    document.documentElement.setAttribute("color-mode", "dark");

    // Sets the user's preference in local storage
    localStorage.setItem("color-mode", "dark");
};

// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".color-mode__btn");

// Set up event listeners
toggleColorButtons.forEach(btn => {
    btn.addEventListener("click", toggleColorMode);
});


// ================================================================================


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
};