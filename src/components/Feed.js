import React from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form> 
                        <input type="text"/>
                        <button type="submit">Send</button>
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
            <Post 
            name="Anaïs Tang"
            description="This is a post"
            message="This is a message"
            />
        </div>

    )
}

export default Feed
