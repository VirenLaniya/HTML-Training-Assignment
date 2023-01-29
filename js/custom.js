const menu = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');
const sidebarContentTitles = document.querySelectorAll('.sidebar .content-title');
const mainContent = document.querySelector('.main-content');
menu.addEventListener('click', (e) => {
    sidebar.classList.toggle('sidebar-hide');
    sidebarContentTitles.forEach(sidebarContentTitle => {
        sidebarContentTitle.classList.toggle('d-none');
    });
});


// Innerpage
const navLinks = document.querySelectorAll('.nav-tabs .nav-link');
const tabContents = document.querySelectorAll('.tab-content');

for(let i=0; i<navLinks.length;i++){
    navLinks[i].addEventListener('click', (e) => {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        })
        navLinks[i].classList.add('active');
        tabContents.forEach(tabContent=>{
            tabContent.classList.add('d-none');
        });
        tabContents[i].classList.remove('d-none');
    })
}