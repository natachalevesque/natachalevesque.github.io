import PostBox from './PostBox';
import useAPI from './useAPI';

import './PostList.css'

function PostList() {

    const nasaData = useAPI([])
    console.log(nasaData)

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