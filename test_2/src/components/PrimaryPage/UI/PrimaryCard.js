import './primarycard.css';

function PrimaryCard(props){
    const classes="PCard-wrapper "+props.className
    return(
        <div className={classes}>{props.children}</div>
    );
}
export default PrimaryCard;