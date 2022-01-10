import './PostImage.css';

function PostImage({nasaDataImage, onReady}) {
    return (
        <img className={"PostImage"} src={nasaDataImage} alt="See Description." onLoad={onReady}/>
    )
}

export default PostImage;