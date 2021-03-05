import React from 'react';
import Post from '../Post/Post';
import styl from './NewsFeed.module.css';
import lorem1 from "./../../media/photos/image01__.jpg"
import lorem2 from "./../../media/photos/images.jpg"
import lorem3 from "./../../media/photos/lorem-ipsum-generator-cicero-engraving.png"



function NewsFeed(props) {
    return (
        <div className={styl.NewsFeed}>
            <Post txt="post 1"/>
            <Post txt="lorem" img={lorem1}/>
            <Post txt="lorem lorem lorem" img ={lorem2}/>
            <Post txt="lorem..." img ={lorem3}/>
            


        </div>
    );
}

export default NewsFeed;