import { format, subDays } from 'date-fns'
import PostBox from './PostBox';
import { useState, useEffect } from 'react';

import './PostList.css'

function PostList() {

    let startDate = new Date()
    let endDate = new Date(subDays(startDate, 3))

    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        startDate = format(startDate, 'yyyy-MM-dd')
        endDate = format(endDate, 'yyyy-MM-dd')

        const APIKEY = process.env.REACT_APP_NASA_API_KEY

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&start_date=${endDate}&end_date=${startDate}`)
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