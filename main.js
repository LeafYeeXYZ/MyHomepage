// 下拉菜单:不要动下面的代码
function pxToEm(px) {
    if (px > 0){
        return '0.4em';
    }
    else{
        return '-12em';
    }
}
let navbar = document.querySelector('.navbar');
function ShowNavbar() {
    let navbarTopPx = parseFloat(window.getComputedStyle(navbar).getPropertyValue('top'));
    let navbarTopEm = pxToEm(navbarTopPx);
    if (navbarTopEm === '0.4em') {
        navbar.style.top = '-12em';
        navbar.style.opacity = '0';
        menuIcon.src = 'icon/menu.svg';
    }
    else if(navbarTopEm === '-12em'){
        navbar.style.top = '0.4em';
        navbar.style.opacity = '1';
        menuIcon.src = 'icon/menudown.svg';
    }
    else{
        console.log('error');
        console.log('value is' + navbarTopEm);
    }
}
let menuIcon = document.querySelector('.header.icon.menu');
menuIcon.addEventListener('click', ShowNavbar);

// 切换主题




// 切换背景图片



