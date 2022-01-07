import './PostImage.css';

function PostImage({ nasaDataImage }) {
    return(
        <img className={"PostImage"} src={nasaDataImage} alt="Drawing of a UFO over a mountain"/>
    )
}

export default PostImage;