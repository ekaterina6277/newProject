function addItemDom(item) {
    let template = `
    <div class="faq" data-item-id="${item.id}">
    
    <div class="remove-item" data-id="${item.id}">
    X
    </div>
    </div>`;
    
    let wrapperList = document.querySelector('.faq');
    wrapperList.innerHTML = template + wrapperList.innerHTML;
}
