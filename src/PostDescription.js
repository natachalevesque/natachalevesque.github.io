import './PostDescription.css'

function PostDescription({ nasaDataDescription, naseDataTitle, nasaDataDate }) {
    return(
        <div className={"PostDescription"}>
            <h4 className={"Title"}>{ naseDataTitle } - { nasaDataDate }</h4>
            <p className={"Paragraph"}>{ nasaDataDescription }</p>
        </div>
    )
}

export default PostDescription;