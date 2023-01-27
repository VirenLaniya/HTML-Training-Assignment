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