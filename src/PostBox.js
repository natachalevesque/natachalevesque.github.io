import './PostBox.css';
import PostMedia from './PostMedia';
import PostDescription from './PostDescription';
import LikeButton from './LikeButton';
import {forwardRef} from "react";

const PostBox = forwardRef(
    function Post({nasaPostData, onReady}, ref) {
        return (
            <div className={"PostBox"} ref={ref}>
                <PostMedia nasaDataMedia={nasaPostData.url} mediaType={nasaPostData.media_type} onReady={onReady}/>
                <PostDescription className={"PostBoxPadding"}
                                 nasaDataDescription={nasaPostData.explanation}
                                 naseDataTitle={nasaPostData.title}
                                 nasaDataDate={nasaPostData.date}
                />
                <LikeButton className={"PostBoxPadding"}/>
            </div>
        )
    }
);

export default PostBox;