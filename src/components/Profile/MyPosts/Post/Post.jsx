import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <div>
                <img src='https://senegalbgc.org/wp-content/uploads/2020/02/JudgesTBD-100x100.png'/>
            </div>            
            
            <div className={style.itemMsg}>
                <span className={style.msg}>{props.message}</span> 
                <span>like {props.likesCount}</span> 
            </div>
        </div>
    )
}

export default Post;