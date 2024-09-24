let tab = function() {

    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabActive;


    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })


    function selectTabNav() {

        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });

        this.classList.add('is-active');

        tabActive = this.getAttribute('data-tab-name');

        selectTabContent(tabActive);
    }

    function selectTabContent(tabActive) {
        tabContent.forEach(item => {
            if(item.classList.contains(tabActive)) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        })
    }
}

tab();