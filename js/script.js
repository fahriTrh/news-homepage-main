const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const closeIcon = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

menuIcon.onclick = () => {
    navMenu.style.zIndex = '10';
    navMenu.style.opacity = '1';
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    overlay.style.right = '0';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        closeIcon.style.opacity = '1';
        closeIcon.style.transform = 'scale(1)';
        overlay.style.opacity = '1';
    }, 300);

    setTimeout(() => {
        closeIcon.style.transform = 'rotate(180deg)';
    }, 400);
}

closeIcon.onclick = () => {
    closeIcon.style.transform = 'rotate(-180deg)';
    document.body.style.overflow = 'auto';

    setTimeout(() => {
        navMenu.style.zIndex = '-10';
        navMenu.style.opacity = '0';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
        overlay.style.right = '';

        closeIcon.style.opacity = '0';
        closeIcon.style.transform = 'scale(0)';
        overlay.style.opacity = '0';
    }, 400);
}

window.onresize = () => {
    if (window.innerWidth < 576) {
        menuIcon.style.display = 'block';
        navMenu.style.zIndex = '-10';
        navMenu.style.opacity = '0';
    }
    if (window.innerWidth >= 576) {
        overlay.style.right = '';
        closeIcon.style.display = 'none'
        document.body.style.overflow = 'auto';
    }
    if (window.innerWidth >= 768) {
        navMenu.style.zIndex = '10';
        navMenu.style.opacity = '1';
        menuIcon.style.display = 'none';
    }
}