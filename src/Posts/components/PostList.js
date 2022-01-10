import '../css/PostList.css'
import PostBox from '../../Post/components/PostBox';
import useAPI from '../../Main/hooks/useAPI.js';
import useLastPostObserver from '../hooks/useLastPostObserver';
import {useState} from 'react'
import {subDays} from "date-fns";

function PostList() {

    const [dateRange, setDateRange] = useState({
        'endDate': new Date(),
        'startDate': subDays(new Date(), 2)
    })

    const nasaData = useAPI(dateRange)
    const [loadedImages, setLoadedImages] = useState([])

    function onReady(url) {
        setLoadedImages(prevLoadedImages => [...prevLoadedImages, url])
    }

    const lastPostElementRef = useLastPostObserver(dateRange, setDateRange, nasaData.length !== loadedImages.length)


    const postBoxes = nasaData.map((nasaPostData, i) => {
        return (<PostBox nasaPostData={nasaPostData} onReady={onReady} key={nasaPostData.url}
                         ref={i === nasaData.length - 1 ? lastPostElementRef : undefined}/>)
    });


    return (
        <div className={"PostList"}>
            {postBoxes}
        </div>
    )
}

export default PostList;