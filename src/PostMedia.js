import './PostMedia.css';

function PostMedia({nasaDataMedia, mediaType, onReady}) {

    const mediaTypeIsImage = mediaType === 'image'

    return (
        <div>
            {mediaTypeIsImage ? <img className={"PostImage"} src={nasaDataMedia} alt="See Description." onLoad={onReady}/>
            : <iframe className={"PostVideo"} src={nasaDataMedia}/>}
        </div>
    )

}

export default PostMedia;