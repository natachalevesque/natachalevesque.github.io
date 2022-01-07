import apod from './apod.jpeg';
import './PostImage.css';

function PostImage() {
    return(
        <img className={"PostImage"} src={apod} alt="Drawing of a UFO over a mountain"/>
    )
}

export default PostImage;