import PrimaryCard from './UI/PrimaryCard';
import Items from '../common-components/Items';
import {useState, useEffect} from 'react';
import db from '../../firebase.js'
import DropdownItem from '../common-components/DropdownItem';
import ItemsHandler from '../common-components/ItemsHandler';
import { MdPeople , MdPeopleOutline } from 'react-icons/md';
import {BsThreeDots} from 'react-icons/bs';
import{ IoSettingsOutline , IoSettingsSharp } from 'react-icons/io5'
import './teamspp.css';


function TeamsPP(){
    const [groupspp,setGroupsPP] = useState([])

    useEffect(() => {
        db.collection('TeamsPP_active').onSnapshot(snapshot => {
            setGroupsPP(snapshot.docs.map(doc => doc.data().header))
        })
    },[])
    return(
        <PrimaryCard className="TeamsPP-card">

            <div className="TeamsPP-header">
                <label>Teams</label>
            </div>

            

            <div className="TeamsPP-wrapper">
                <div className="TeamsPP-wrapper__label">
                    Your teams
                </div>
                {groupspp.map(group => (
                    <DropdownItem className="TeamsPP__DropdownItem">
                        <i></i>
                        <div className="TeamsPP__DropdownItem__label">{group}</div>
                        <span className="TeamsPP__Settings"><BsThreeDots className="TeamsPP__icon"  color="green"/></span>
                    </DropdownItem>
                ))}

            </div>


            <div className="TeamsPP-bottom" onMouseEnter={ItemsHandler}>
                <Items
                    className="CreateTeams-wrapper"
                    iconA={<MdPeopleOutline className="icon" size="1.4em"/>}
                    iconB={<MdPeople size="1.4em"/>}
                    title="Join or create a team"/>
                <Items
                    className="CreateTeams__settings"
                    iconA={<IoSettingsOutline className="icon nope" size="1.2em"/>}
                    iconB={<IoSettingsSharp className="nope" size="1.2em"/>}/>
            </div>
        </PrimaryCard>
    );
}

export default TeamsPP;