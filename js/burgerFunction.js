const burger = document.querySelectorAll('.burger'),
    menu = document.querySelectorAll('.header__nav'),
    tel = document.querySelectorAll('.header__tel-icon'),
    navItem = document.querySelectorAll('.header-nav__item');

function toggleBurger() {
    burger.forEach(item => {
        if(item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    })
    tel.forEach(item => {
        if(item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    })
    menu.forEach(item => {
        if(item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
    navItem.forEach(item => {
        if(item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

burger.forEach(item => {
    item.addEventListener('click', toggleBurger);
})

navItem.forEach(item => {
    item.addEventListener('click', toggleBurger);
})