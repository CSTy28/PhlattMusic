import React from 'react'
import { FontAwesomeIcon, fontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
function Controls(props) {
    return (
        <div>
            <button className='backward-btn' onClick={() => {props.skipSong(false)}}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className='play-btn' onClick={() => {props.setIsPlaying(!props.isPlaying)}}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className='forward-btn' onClick={() => {props.skipSong(true)}}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls
