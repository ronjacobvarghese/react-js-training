
import './navbar.css';
import {IconContext} from 'react-icons'
import Items from '../common-components/Items';
import ItemsHandler from '../common-components/ItemsHandler';
import { BsBell , BsBellFill, BsChatDots , BsChatDotsFill , BsCalendar , BsCalendarFill , BsThreeDots} from "react-icons/bs";
import { HiOutlineUserGroup , HiUserGroup , HiOutlineShoppingBag , HiShoppingBag } from "react-icons/hi";
import { IoCallOutline , IoCallSharp , IoHelpCircleSharp , IoHelpCircleOutline } from "react-icons/io5";
import { AiOutlineFile , AiFillFile , AiOutlineAppstore , AiTwotoneAppstore} from "react-icons/ai";

function Navbar(){

    return(
        <IconContext.Provider value={  {color:"white" , size:"1.3em" } }>
            <div className='Navbar-wrapper' onMouseEnter={ItemsHandler}>
                <div className='Navbar-topitem'>
                    <Items className="NavItem-wrapper" iconA={<BsBell className="icon"/>} iconB={<BsBellFill/>} title="Activity"/>
                    <Items className="NavItem-wrapper"  iconA={<BsChatDots className="icon"/>} iconB={<BsChatDotsFill/>} title="Chats"/>
                    <Items className="NavItem-wrapper"  iconA={<HiOutlineUserGroup className="icon"/>} iconB={<HiUserGroup/>} title="Teams"/>
                    <Items className="NavItem-wrapper"  iconA={<HiOutlineShoppingBag className="icon"/>} iconB={<HiShoppingBag/>} title="Assignments"/>
                    <Items className="NavItem-wrapper"  iconA={<BsCalendar className="icon"/>} iconB={<BsCalendarFill/>} title="Calendar"/>
                    <Items className="NavItem-wrapper"  iconA={<IoCallOutline className="icon"/>} iconB={<IoCallSharp/>} title="Calls"/>
                    <Items className="NavItem-wrapper"  iconA={<AiOutlineFile className="icon"/>} iconB={<AiFillFile/>} title="Files"/>
                    <div className='settings-wrapper'>
                        <BsThreeDots/>
                    </div>

            </div>
            <div className='Navbar-bottomitem'>
                    <Items className="NavItem-wrapper"  iconA={<AiOutlineAppstore className="icon"/>} iconB={<AiTwotoneAppstore/>} title="Apps"/>
                    <Items className="NavItem-wrapper"  iconA={<IoHelpCircleOutline className="icon"/>} iconB={<IoHelpCircleSharp/>} title="Help"/>
            </div>
        </div>
        </IconContext.Provider>
        
    );
}

export default Navbar;
    