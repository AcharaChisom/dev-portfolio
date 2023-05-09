const controlEls = document.getElementsByClassName('control')

function pageTransitions() {
    [...controlEls].forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.active-btn').classList.remove('active-btn')
            this.classList.add('active-btn')

            document.querySelector('.active').classList.remove('active')
            document.getElementById(btn.dataset.id).classList.add('active')
        })
    })
}

pageTransitions()
