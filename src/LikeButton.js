import './LikeButton.css';
import {useState} from 'react';

function LikeButton({className}) {
    const [likeButtonValue, setLikeButtonValue] = useState(false)

    return (
        <button className={`LikeButton ${className}`} type="button"
                onClick={() => setLikeButtonValue(!likeButtonValue)}
                style={{backgroundColor: likeButtonValue ? '#e69797' : '#fff'}}>
            {likeButtonValue ? 'Unlike' : 'Like'}
        </button>
    )
}

export default LikeButton;