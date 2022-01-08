import './LikeButton.css';
import {useState} from 'react';

function LikeButton({className}) {
    const [likeButtonValue, setLikeButtonValue] = useState(false)

    return (
        <button className={`LikeButton ${className}`} type="button"
                onClick={() => setLikeButtonValue(!likeButtonValue)}
                style={{backgroundColor: likeButtonValue ? '#f75757' : '#fff'}}>
            {likeButtonValue ? 'Unlike' : 'Like'}
        </button>
    )
}

export default LikeButton;