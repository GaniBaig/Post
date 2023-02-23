import React, { useState } from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import { FaComment,FaRegComment } from "react-icons/fa";
import img from "../images/thumb2-owl-twilight-art-minimal-birds.jpg"
import "./post.css";
import Comments from '../CommentSection/Comments';
function Post(props) {
    const [com,setcom]=useState(false)
    const [like,setLike]=useState(659),
    [isLike,setIsLike]=useState(false),
    onLikeButtonCLick=()=>{
        setLike(like+(isLike?-1:1));
        setIsLike(!isLike);
    }
    const onLikeButtonCLic=()=>{
        setcom(!com);
    }
    return (
        <div>
            <div className="card_container">
                <div className="card_post">
                    <h2 className="h2">User</h2>
                    <div className="card_image">
                    <img src={img} className="image_init"></img>
                    </div>
                    <div className="card_icons">
                    <div className="icon">
                    <BsFillHeartFill onClick={onLikeButtonCLick} className={isLike?"fillred":"nofill"}></BsFillHeartFill>
                    <p>Like{like}</p>
                    </div>
                    <div className="icon">
                    {com && <FaRegComment onClick={onLikeButtonCLic} className="icons" ></FaRegComment>}
                    {!com && <FaComment onClick={onLikeButtonCLic} className="icons"></FaComment>}
                    </div> 
                    </div>
                    {com && <Comments currentUserId={4}/>}
                </div>
            </div>
        </div>
    );
}

export default Post;