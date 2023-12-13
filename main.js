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
        navbar.style.top = '-100vh';
        menuIcon.src = 'icon/menu.svg';
    }
    else if(navbarTopEm === '-12em'){
        navbar.style.top = '0.4em';
        menuIcon.src = 'icon/menudown.svg';
    }
    else{
        console.log('error');
        console.log('value is' + navbarTopEm);
    }
}
let menuIcon = document.querySelector('.header.icon.menu');
menuIcon.addEventListener('click', ShowNavbar);

// 切换主题:也不要动下面的代码
let root = document.documentElement;
let SwitchTheme = document.querySelector('.header.icon.theme');
SwitchTheme.addEventListener('click', themeswitch);
function themeswitch() {
    if (SwitchTheme.src === 'http://127.0.0.1:5500/icon/sun.svg' || SwitchTheme.src === 'https://homepage.leafyee.xyz/icon/sun.svg' || SwitchTheme.src === 'file:///D:/Github/HomePageForLeaf/icon/sun.svg') {
        SwitchTheme.src = 'icon/moon.svg';
        document.body.style.setProperty('--filter-brightness', '0.7');
        document.body.style.setProperty('--filter-brightness-link', '0.8');
    }
    else if (SwitchTheme.src === 'http://127.0.0.1:5500/icon/moon.svg' || SwitchTheme.src === 'https://homepage.leafyee.xyz/icon/moon.svg' || SwitchTheme.src === 'file:///D:/Github/HomePageForLeaf/icon/moon.svg') {
        SwitchTheme.src = 'icon/sun.svg';
        document.body.style.setProperty('--filter-brightness', '1');
        document.body.style.setProperty('--filter-brightness-link', '1');
    }
    else {
        console.log('error');
        console.log('value is' + SwitchTheme.src);
    }
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeswitch();
}

// 导航跳转链接
let compass = document.querySelector('.header.icon.compass');
compass.addEventListener('click', openCompass);
function openCompass() {
    window.open('https://blog.leafyee.xyz/about/#常用网站导航', '_blank');
}

// 切换背景图片
let switcher = document.querySelector('.header.icon.swap');
let switcher_status = 1;
switcher.addEventListener('click', switchBackground);
function switchBackground() {
    console.log('run switchBackground');
    if (switcher_status === 1) {
        document.querySelector('.backimg img').style.display = 'unset';
        document.querySelector('.backimg video').style.display = 'none';
        switcher_status = 0;
        console.log('run done');
    }
    else if (switcher_status === 0) {
        document.querySelector('.backimg video').style.display = 'unset';
        document.querySelector('.backimg img').style.display = 'none';
        switcher_status = 1;
        console.log('run done');
    }
    else {
        console.log('run error');
    }
}


// 阻止选择文本
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});