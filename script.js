function menushow() {
    let icon = document.querySelector('#menu')
    let ul = document.querySelector('nav ul')
    let a = document.querySelector('nav ul li')

    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    } else {
        ul.classList.add('open')
    }
    
    if (icon.textContent === 'menu') {
        icon.textContent = 'close'
    } else {
        icon.textContent = 'menu'
    }
}