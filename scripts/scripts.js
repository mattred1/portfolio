if (
    // Checks user's site preference for dark mode OR an OS-level preference for light mode AND no site preference
    localStorage.getItem('c-mode') === 'light' ||
    (window.matchMedia('(prefers-color-scheme: light)').matches &&
        !localStorage.getItem('c-mode'))
) {
    // if true, set the site to Dark Mode
    document.documentElement.setAttribute('c-mode', 'light')
}


// ================================================================================


// Toggle light & dark mode
const toggleColorMode = (e) => {
    // Switch to Light Mode
    if (e.currentTarget.classList.contains("light--hidden")) {
        // Sets the custom HTML attribute
        document.documentElement.setAttribute("c-mode", "light");

        //Sets the user's preference in local storage
        localStorage.setItem("c-mode", "light")
        return;
    }

    //  Switch to Dark Mode
    // Sets the custom HTML attribute 
    document.documentElement.setAttribute("c-mode", "dark");

    // Sets the user's preference in local storage
    localStorage.setItem("c-mode", "dark");
};

// Get the buttons in the DOM
const toggleColorButtons = document.querySelectorAll(".c-mode__btn");

// Set up event listeners
toggleColorButtons.forEach(btn => {
    btn.addEventListener("click", toggleColorMode);
});


// ================================================================================


window.onscroll = () => { scrollNavbar() };

scrollNavbar = () => {
    // Target elements
    const mainNav = document.getElementById("mainNav");

    if (document.documentElement.scrollTop > 100) {
        mainNav.classList.add("scrolled");
    } else {
        mainNav.classList.remove("scrolled");
    }
}


// ================================================================================


const description = ['a developer', 'a designer', 'a learner', 'a team leader', 'a D&D nerd', 'a cat dad'];
let count = -1;

const nextWord = () => {
    document.getElementById('whoAmI').innerHTML = description[++count % description.length];
};

document.getElementById("randWord").addEventListener("click", nextWord);


// ================================================================================