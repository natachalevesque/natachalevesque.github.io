import '../css/PostDescription.css';
import {useState} from 'react';

function PostDescription({nasaDataDescription, naseDataTitle, nasaDataDate, className}) {

    const [readMore, setReadMore] = useState(false)

    return (
        <div className={`PostDescription ${className}`}>
            <h4 className={"Title"}>{naseDataTitle} - {nasaDataDate}</h4>
            <p className={"Paragraph"}>{!readMore ? nasaDataDescription.slice(0, 200) + "..." : nasaDataDescription}&nbsp;
                <button type={"button"} onClick={() => setReadMore(!readMore)}
                        className={"ReadMore"}>{!readMore ? "Read More" : "Show Less"}</button>
            </p>
        </div>
    )
}

export default PostDescription;