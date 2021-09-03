import React,{useState} from "react";
import {ListItem,ListItemText} from '@material-ui/core';
import "./Comments.css";
import { FaEllipsisV , FaTrash } from "react-icons/fa";
import db from './firebase';



function Comment(props) {
return ( 
    <ListItem>
        <div className="comment-wrapper">
        <div>
        <ListItemText primary={props.name}/>
        <ListItemText primary={props.comment}/>
        </div>
        <Item icon={<FaEllipsisV />}>{DropdownMenu(props)} </Item>

    </div>
    </ListItem>
);
}

function Item(props){
    const [open,setOpen]=useState(false);
    return(
        <li className='extra_item'>
            <a href='#' className='icon-button' onClick={event =>setOpen(!open)}>{props.icon}</a>
            {open && props.children}
        </li>
    )
}

function DropdownMenu(prop){
    function DropdownItem(todo){
        return(
            <div className='sub-item'>
                {todo.children}
            </div>
        );
    }
    return(
        <div className='dropdown'>
            {console.log(prop.id)}
            <p onClick={event => {db
                .collection('comments').doc(prop.id).delete()}}>
                <DropdownItem>
                    <FaTrash className='trash'/>
                    delete
                </DropdownItem></p>
            <DropdownItem>edit</DropdownItem>
        </div>
    )
}

export default Comment;
