import './PostDescription.css'

function PostDescription({nasaDataDescription, naseDataTitle, nasaDataDate, className}) {
    return (
        <div className={`PostDescription ${className}`}>
            <h4 className={"Title"}>{naseDataTitle} - {nasaDataDate}</h4>
            <p className={"Paragraph"}>{nasaDataDescription}</p>
        </div>
    )
}

export default PostDescription;