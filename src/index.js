document.querySelectorAll('.drop-down__item').forEach(element => addEventAccordion(element))

function addEventAccordion(itemAccordion) {
    const buttonItemAccordion = itemAccordion.querySelector('.button');
    buttonItemAccordion.addEventListener('click', () => {
        let isOpened = buttonItemAccordion.classList.contains('line');

        if (isOpened) {
            buttonItemAccordion.classList.remove('line');
            let info = itemAccordion.querySelector('.drop-down__item-buttom');
            info.style.display = 'none'
            debugger
        } else {
            buttonItemAccordion.classList.add('line');
            let info = itemAccordion.querySelector('.drop-down__item-buttom');
            info.style.display = 'block'
        }
    });
}
