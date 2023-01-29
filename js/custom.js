const menu = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');
const sidebarContentTitles = document.querySelectorAll('.sidebar .content-title');
const mainContent = document.querySelector('.main-content');
menu.addEventListener('click', (e) => {
    sidebar.classList.toggle('sidebar-hide');
    sidebarContentTitles.forEach(sidebarContentTitle => {
        sidebarContentTitle.classList.toggle('d-none');
    });
    if (screen.width < 768) {
        mainContent.classList.toggle('disabled');
    }
});

//// Responsive header and Sidebar ////
const navBrand = document.querySelector('.navbar .navbar-brand img');
const searchButton = document.getElementById('basic-addon1');
const searchInput = document.querySelector('.search-input');
const sideSearchContainer = document.querySelector('.side-search-container');
const sideSearch = document.querySelector('.side-search-container .side-search');
if (screen.width < 768) {
    // Header - Navbar
    navBrand.src = 'images/mobile-header-logo.svg';
    navBrand.style.width = "30px"

    // Navbar - Search
    searchButton.addEventListener('click', (e) => {
        if (!sidebar.classList.contains('sidebar-hide')) {
            sideSearch.focus();
        } else {
            menu.click();
            sideSearch.focus();
        }
    })

    // Side bar
    sideSearchContainer.classList.remove('d-none');
    sidebar.classList.add('sidebar-hide');
    sidebarContentTitles.forEach(sidebarContentTitle => {
        sidebarContentTitle.classList.toggle('d-none');
    });
}

// Innerpage
const navLinks = document.querySelectorAll('.nav-tabs .nav-link');
const tabContents = document.querySelectorAll('.tab-content');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', (e) => {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        })
        navLinks[i].classList.add('active');
        tabContents.forEach(tabContent => {
            tabContent.classList.add('d-none');
        });
        tabContents[i].classList.remove('d-none');
    })
}