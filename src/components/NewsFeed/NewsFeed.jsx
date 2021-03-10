import React from 'react';
import Post from '../Post/Post';
import styl from './NewsFeed.module.css';
import lorem1 from "./../../media/photos/image01__.jpg"
import lorem2 from "./../../media/photos/images.jpg"
import lorem3 from "./../../media/photos/lorem-ipsum-generator-cicero-engraving.png"



function NewsFeed(props) {
    let posts = props.postDB.map( el => <Post txt={el.txt} img={el.img} />);
    return (
        <div className={styl.NewsFeed}>
            {posts}
        </div>
    );
}

export default NewsFeed;