// script.js

// Select the menu button and sidebar
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

// Toggle visibility when menu button is clicked
menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});

