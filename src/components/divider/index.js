import favorite from "../../img/heart.png";
import liked from "../../img/heart-liked.png";
import {useState} from "react";

import "./index.css";

const Divider = () => {
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setIsLiked(prev => !prev);
    };

    return (
        <span className={"divider"}>
                <div className={"favouriteBtn"} onClick={likeHandler}>
                    <img src={isLiked ? liked : favorite}/>
                    <p> ADD TO FAVOURITES</p>
                </div>
        </span>
    );
};
export default Divider;