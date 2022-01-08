import { format, subDays, parseISO } from 'date-fns'
import PostBox from './PostBox';
import { useState, useEffect } from 'react';

import './PostList.css'

function PostList() {

    const startDate = format(new Date(), 'yyyy-MM-dd')
    const endDate = format(
        new Date(subDays(parseISO(startDate), 3)), 'yyyy-MM-dd')

    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=edpcBO9Udgva5NwD4QswoyrsP5ZDGjEeR6W7bVrN&start_date=${endDate}&end_date=${startDate}`)
            .then(response => response.json())
            .then(json => setNasaData(json))
    }, [])

    const postBoxes = nasaData.map(( nasaPostData, i ) => {
        return (<PostBox nasaPostData={nasaPostData} key={i}/>)
    });

    return(
        <div className={"PostList"}>
            {postBoxes.reverse()}
        </div>
    )
}

export default PostList;