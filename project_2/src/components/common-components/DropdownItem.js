import './dropdownitem.css';
function DropdownItem(props){
    const classes="dropdownitem-wrapper "+props.className
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default DropdownItem;