import './header.css';
import ItemsHandler from '../common-components/ItemsHandler';
import Items from '../common-components/Items';
import { IconContext } from 'react-icons';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs'
import { IoPersonCircleOutline , IoPersonCircleSharp } from "react-icons/io5";

function Header() {

  function SearchHandler(){
    const search=document.activeElement
    if (search.classList.value==="search"){
      search.parentElement.childNodes[0].classList.add("passive");
    }
    if(search.value===""){
      search.parentElement.childNodes[0].classList.remove("passive")
    }
  }

  return (
    <div className="App-header" >
      <div className="left-wrapper">
        <span className="Nevermind-wrapper"></span>
        <label>Microsoft Teams</label>
      </div>
      <div className="search-wrapper">
        <i><AiOutlineSearch className="icons" color="gray" size="1.1em" /><label>Search</label></i>
        <input className="search" onChange={SearchHandler}/>

      </div>
      
      <div className="right-wrapper" onMouseEnter={ItemsHandler}>
        <div className='setting-wrapper'>
             <BsThreeDots color="white"/>
        </div>
        <IconContext.Provider value={{color:"white" ,size:"1.5em"}}>
          <Items className="HeadItem-wrapper" iconA={<IoPersonCircleOutline className="icon"/>} iconB={<IoPersonCircleSharp/>}/>
        </IconContext.Provider>


        <div className="spacer"></div>
      </div>
      
    </div>

  );
}

export default Header;
