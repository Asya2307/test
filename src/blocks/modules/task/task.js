document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.querySelectorAll('.checkbox__custom');

    // ADD ACTIVE CLASS ON ELEMENT

    checkButton.forEach((item) => {
        item.addEventListener('click', (event) => {
            const status = event.currentTarget.checked
            if (!status) {
                event.currentTarget.closest('.task__item').classList.remove('active')
            } else {
                event.currentTarget.closest('.task__item').classList.add('active')
            }
        })
    })
})