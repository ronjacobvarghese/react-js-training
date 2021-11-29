function ItemHandler(){
    const items=document.querySelectorAll(".Items-wrapper")
    items.forEach(item =>{
        item.addEventListener("mouseover",() => {
            const icons=item.childNodes[0]
            icons.childNodes[0].classList.remove('active');
            icons.childNodes[1].classList.add('active');
        })
    })
    items.forEach(item =>{
        item.addEventListener("mouseout",() => {
            const icons=item.childNodes[0];
            icons.childNodes[0].classList.add('active');
            icons.childNodes[1].classList.remove('active');
        })
    })
}

export default ItemHandler;