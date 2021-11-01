import React, { useState, useEffect } from 'react';
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';
import { db } from '../firebaseconfig';
import { collection, onSnapshot, addDoc, orderBy, query } from "firebase/firestore";
import { serverTimestamp } from '@firebase/firestore';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const postsRef = collection(db, "posts")
    const q = query(postsRef, orderBy("timestamp", "desc"))

    useEffect(
        () => 
            
        onSnapshot(q, (snapshot) => 
           setPosts(
            snapshot.docs.map((doc) =>  ({
               id: doc.id, 
               data: doc.data(),
           })))
           ),[]
    );
           
    const sendPost = (e) => {
        e.preventDefault();
        addDoc(postsRef, {
          name: 'Anais',
          description: 'This is a test message hello!',
          message: input,
          photoUrl: '',
          timestamp: serverTimestamp() ,
        });

        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form> 
                        <input 
                            type="text" 
                            value={input} 
                            onChange={e => setInput(e.target.value)}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption 
                        title="Photo"
                        Icon={ImageIcon}
                        color="#70B5F9"
                    />
                    <InputOption 
                        title="Video"
                        Icon={SubscriptionsIcon}
                        color="#E7A33E"
                    />
                    <InputOption 
                        title="Event"
                        Icon={EventNoteIcon}
                        color="#C0CBCD"
                    />
                    <InputOption 
                        title="Write article"
                        Icon={CalenderViewDayIcon}
                        color="#7FC15E"
                    />
                </div>
            </div>
            {/* Posts */}
            {posts.map(({ id, data: { name, description, message, photoUrl 
            } }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
    ))}

        </div>

    )
}

export default Feed
