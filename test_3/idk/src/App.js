import React,{useState} from 'react';
import { ReactComponent as Messenger} from './icons/messenger.svg';
import {ReactComponent as Bell} from './icons/bell.svg';
import {ReactComponent as Plus} from './icons/plus.svg';
import {ReactComponent as Arrow} from './icons/arrow.svg';
import {ReactComponent as Bolt} from './icons/bolt.svg';
import {ReactComponent as Chevron} from './icons/chevron.svg';
import {ReactComponent as Cog} from './icons/cog.svg';
import {ReactComponent as Caret} from './icons/caret.svg';
import{CSSTransition} from 'react-transition-group';


//whenever creating a icon via svg we rename the svg using ReactComponent and also specify the size,color,width to make it appear


function App() {
  return (
    <Navbar>
      <NavItem icon={<Bell />}/>
      <NavItem icon={<Messenger />}/>
      <NavItem icon={<Plus/>}/>
      <NavItem icon={<Caret />}>
        <DropdownMenu>Hello world</DropdownMenu>
      </NavItem>
    </Navbar>
  )
};


function Navbar(props){
  return(
  <nav className="navbar">
  <ul className="navbar-nav">{props.children}</ul>
  </nav>

);
}


function NavItem(props){
  //the below line becomes true and false whenever the user clicks on it
  //(its function is to drop the list or close the list when ever the user clicks on it)
  //its set to false initially because the drop list must close on refresh of the page
  const [open,setOpen]=useState(false);
  return(
    <li className="nav_item">
      <a href='#' className="icon-button" onClick={()=>setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
    //the above line activates whenever open is true and whenever there are child nodes in it
  )
}


function DropdownMenu(){
  const[active,setActive]=useState('main')
  function DropdownItem(props){
    return(
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return(
    <div className="dropdown">
      <CSSTransition in={active ==='main'}
      unmountOnExit timeout={500}
      classNames="menu-primary">
      <div classname='menu'>
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<Cog />}
        rightIcon={<Chevron/>}>
          Settings
      </DropdownItem>
      </div>
      </CSSTransition>

    </div>
  )
}
export default App;
