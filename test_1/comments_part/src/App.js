import React,{ useState , useEffect}from 'react';
import { Button , Input , FormControl,List} from '@material-ui/core';
import db from './firebase'
import './App.css';
import Comment from './Comment';
import firebase from 'firebase';

function App() {
  const [comments,setComments]=useState([]);//casts and array where the comments are stored in short term memory;
  const [input,setInput]=useState('');
  const [name,setName]=useState('');

  //when the app loads,teh value is taken from the database and take the comment as they are added;
  useEffect(() => {
    //this code fires when the app loads or whenever the input changes;
      db.collection('comments').orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setComments(snapshot.docs.map(doc => ({id: doc.id ,comment :doc.data().comment,name: doc.data().name})));
      })
    },[]);
  const addComments=(event)=>{
    db.collection('comments').add({
      comment: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: name
    })
    event.preventDefault();//prevents the page from refreshing;
    setInput('');//re initiates it to a empty stringl
  }
  return (
    <div className="App">
      <center> <h1>Comments prototype</h1></center>
      <form>
      <form className="Form">
      <input  placeholder="Enter name" id='name' className='Name' value={name} onChange={event => setName(event.target.value)}/>
      <input  placeholder="Enter text" className='message' id='message' value={input} onChange={event => setInput(event.target.value)}/>
      <button type="submit" className='button' disabled={!input} id='button' onClick={addComments}>Comments?</button>
      </form>
    </form>
    <ul>
      {comments.map(comment =>(Comment(comment)))}
    </ul>
    </div>
  );
}

export default App;
