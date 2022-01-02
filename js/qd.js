let scrollpos = window.scrollY

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
    if (scrollpos >= 200) {
        document.querySelector('header').classList.add('headerBox')
    } else {
        document.querySelector('header').classList.remove('headerBox')
    }

})


let copy = document.querySelector('.copy time')
let today = new Date()
let year = today.getFullYear()
copy.innerText = year