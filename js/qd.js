let scrollpos = window.scrollY

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
    if (scrollpos >= 200) {
        document.querySelector('header').classList.add('headerBox')
    } else {
        document.querySelector('header').classList.remove('headerBox')
    }

    console.log(scrollpos)
})