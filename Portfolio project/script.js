document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const navOffsetTop = nav.offsetTop;

    const handleScroll = () => {
        if (window.pageYOffset > navOffsetTop) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
    };

    window.addEventListener('scroll', handleScroll);
});
