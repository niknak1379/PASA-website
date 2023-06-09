const navElement = document.querySelector('nav');
const navToggle = document.getElementById("mobile-nav-toggle");
navToggle.addEventListener('click', () => {
    let visibility = navElement.getAttribute('data-open');
    if (visibility === "false"){
        navElement.setAttribute('data-open', 'true');
        navToggle.setAttribute('data-toggled', 'true');
        navToggle.parentElement.removeChild(navToggle);
        navElement.insertBefore(navToggle, navElement.firstChild);
    }
    else{
        navElement.setAttribute('data-open', 'false');
        navToggle.setAttribute('data-toggled', 'false');
        navElement.removeChild(navToggle);
        navElement.parentElement.insertBefore(navToggle, navElement);
    }
})