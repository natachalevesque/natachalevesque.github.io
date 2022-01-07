import PostTitle from './PostTitle';
import PostImage from './PostImage';
import PostDescription from './PostDescription';
import LikeButton from './LikeButton';

import './PostBox.css';

function PostBox() {
    return(
        <div className={"PostBox"}>
            <PostTitle/>
            <PostImage/>
            <PostDescription/>
            <LikeButton/>
        </div>
    )
}

export default PostBox;