import './PostImage.css';

function PostImage({nasaDataImage}) {
    return (
        <img className={"PostImage"} src={nasaDataImage} alt="See Description."/>
    )
}

export default PostImage;