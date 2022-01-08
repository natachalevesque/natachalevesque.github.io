import PostImage from './PostImage';
import PostDescription from './PostDescription';
import LikeButton from './LikeButton';

import './PostBox.css';

function PostBox({ nasaPostData }) {

    return (
        <div className={"PostBox"}>
            <PostImage nasaDataImage={nasaPostData.hdurl} />
            <PostDescription
                nasaDataDescription={nasaPostData.explanation}
                naseDataTitle={nasaPostData.title}
                nasaDataDate = {nasaPostData.date}
            />
    <LikeButton/>
</div>
)
}

export default PostBox;