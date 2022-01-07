import PostImage from './PostImage';
import PostDescription from './PostDescription';
import LikeButton from './LikeButton';

import {useState, useEffect} from 'react';

import './PostBox.css';

function PostBox() {

    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=edpcBO9Udgva5NwD4QswoyrsP5ZDGjEeR6W7bVrN')
            .then(response => response.json())
            .then(json => setNasaData(json))
    }, [])

    console.log(nasaData)

    return (
        <div className={"PostBox"}>
            <PostImage nasaDataImage={nasaData.hdurl} />
            <PostDescription
                nasaDataDescription={nasaData.explanation}
                naseDataTitle={nasaData.title}
                nasaDataDate = {nasaData.date}
            />
    <LikeButton/>
</div>
)
}

export default PostBox;