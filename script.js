const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerHTML = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 250

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 3)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})