function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    const menuIcon = document.querySelector('.menu-icon');

    menuList.classList.toggle('active'); // Show/hide menu

    // Toggle between hamburger icon and close (X) icon
    if (menuList.classList.contains('active')) {
        menuIcon.innerHTML = '✖'; // Change to close icon
    } else {
        menuIcon.innerHTML = '&#9776;'; // Change back to hamburger
    }
}

document.getElementById("year").textContent = new Date().getFullYear();
// Toggle submenu visibility
const menuItems = document.querySelectorAll('.menu-item');

// menuItems.forEach(item => {
//     item.querySelector('.toggle-submenu').addEventListener('click', function(e) {
//         e.preventDefault(); // Prevent the parent link from navigating
//         item.classList.toggle('active');

//         // Change the + and - icons
//         const submenuIcon = this;
//         if (item.classList.contains('active')) {
//             submenuIcon.innerHTML = '−'; // Expanded state
//         } else {
//             submenuIcon.innerHTML = '+';
//         }
//     });
// });



const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faqAnswer = toggle.parentElement.nextElementSibling;
        faqAnswer.classList.toggle('show');
        
        toggle.textContent = toggle.textContent === '+' ? '-' : '+';
    });
});


