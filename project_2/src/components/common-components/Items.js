import './items.css'
function Items(props){
    const classes="Items-wrapper "+props.className;
    return(
        <div className={classes}>
            <div className="Icon-wrapper">
                <i className="active">{props.iconA}</i>
                <i>{props.iconB}</i>
            </div>
            <label>{props.title}</label>
        </div>
    );
}
export default Items;