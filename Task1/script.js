// Smooth scrolling for navigation links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Show More functionality for certifications
document.querySelector('.show-more').addEventListener('click', function() {
    // Logic to reveal additional certifications
    // For simplicity, assume more certifications are hidden below and will be displayed when clicked
    alert("Displaying more certifications... (Implement your logic here)");
});

// Menu toggle for small devices
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('menu-open');
    });
});

