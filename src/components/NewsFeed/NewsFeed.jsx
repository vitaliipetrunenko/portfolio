import React from 'react';
import Post from '../Post/Post';
import styl from './NewsFeed.module.css';
import lorem1 from "./../../media/photos/image01__.jpg"
import lorem2 from "./../../media/photos/images.jpg"
import lorem3 from "./../../media/photos/lorem-ipsum-generator-cicero-engraving.png"
import NewPost from '../NewPost/NewPost';
import ContainerNewPost from '../NewPost/ContainerNewPost';
//import { addPost } from '../../redux/state';



function NewsFeed(props) {
    let posts = props.postDB.map( el => <Post txt={el.txt} img={el.img} />);
    //props.addPost("text",lorem3);
    return (
        <div className={styl.NewsFeed}>
            <ContainerNewPost dispatch={props.dispatch} newPostTextField={props.newPostTextField} />
            {posts.reverse()}
        </div>
    );
}

export default NewsFeed;