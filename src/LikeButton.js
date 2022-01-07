import './LikeButton.css';
import {useState} from 'react';

function toggleLike({setLikeButtonValue, likeButtonValue}) {
    const newValue = !likeButtonValue.value
    if (newValue) {
        setLikeButtonValue({textValue: 'Unlike', value: true, btnColor: '#f75757'})
    } else {
        setLikeButtonValue({textValue: 'Like', value: false, btnColor: '#fff'})
    }
}

function LikeButton() {
    const [likeButtonValue, setLikeButtonValue] = useState({textValue: 'Like', value: false, btnColor: 'white' })
    return (
        <button className={"LikeButton"} type="button"
                onClick={() => toggleLike({setLikeButtonValue, likeButtonValue})}
                style={{ backgroundColor: likeButtonValue.btnColor }}>
            {likeButtonValue.textValue}
        </button>
    )
}

export default LikeButton;