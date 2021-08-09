import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <div>
                <h3>Мои посты</h3>

                <div>                    
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Добавить</button>
                    </div>                    
                </div>

                <div className={style.posts}>
                    {postsElements.reverse()}
                </div>
                
            </div>
        </div>
    );
}

export default MyPosts;