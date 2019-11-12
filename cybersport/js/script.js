function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__nav-list-item-ref');
    let overlay = menu.find('.burger-menu__overlay')

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
    menu.toggleClass('burger-menu-active');

    if (menu.hasClass('burger-menu-active')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');