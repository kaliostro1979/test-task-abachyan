import $ from 'jquery';

$(document).ready(() => {
    const selectors = {
        html: 'html',
        menu: '[data-header-menu]',
        menuOpen: '[data-menu-open]',
        menuClose: '[data-menu-close]',
        dropdown: '[data-header-nav-dropdown]',
    }

    const $html = $(selectors.html)
    const $menu = $(selectors.menu);
    const $menuOpen = $(selectors.menuOpen)
    const $menuClose = $(selectors.menuClose)

    $menuOpen.on('click', () => {
        $menu.addClass('opened')
        $html.addClass('scrollOff')
    })

    $menuClose.on('click', () => {
        $menu.removeClass('opened')
        $html.removeClass('scrollOff')
    })

    $(document).on('click', (evt) => {
        if (window.innerWidth >= 992) {
            return
        }

        const $target = $(evt.target)
        const $dropdown = $target.siblings(selectors.dropdown)

        if ($dropdown.length) {
            evt.preventDefault()
            $dropdown.slideToggle()
        }
    })
});