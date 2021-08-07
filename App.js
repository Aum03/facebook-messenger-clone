import './App.css';
import Message from "./Message";
import FlipMove from "react-flip-move"
import firebase from "./firebase"
import { useEffect, useState } from "react";
import messengerlogo from "./messenger-logo.png";
import { FormControl, Input } from "@material-ui/core";
import { db } from './firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState('');




  useEffect(() => {

    setUsername(prompt('please enter your name'))

  }
    , [])
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => (
        { message: doc.data(), id: doc.id })
      ))
    })

  }, [])

  const sendMessage = (event) => {

    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    // setMessage([...messages, { username: username, message: input }]);
    setInput('');

  }
  return (
    <div className="app">
      <img className="app__logo" src={messengerlogo} alt="" />
      <form className="app__form">
        <FormControl className="form">

          <Input placeholder="enter the message" className="form__input" value={input} onChange={event => (setInput(event.target.value))} />
          <IconButton  className="iconButton" type="submit" variant="contained" color="primary" onClick={sendMessage} disabled={!input}>
            <SendIcon />
          </IconButton>


        </FormControl>


       
        {/* <Button type="submit" variant="contained" color="primary" onClick={sendMessage} disabled={!input}>
          send message
        </Button> */}

      </form>

      <FlipMove>
        {messages.map(({ message, id }) =>
          (

            <Message key={id} username={username} message={message} />

          )
        )
        }
      </FlipMove>
    </div>
  );
}

export default App;
