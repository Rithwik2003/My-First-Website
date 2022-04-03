
const navSlide = () => {
    const menuIcon = document.getElementById('btn')
    const nav = document.querySelector('.menu-items')

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active-nav');
    })

}

navSlide();
