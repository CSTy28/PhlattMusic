import React from 'react'

function Details(props) {

    

    return (
        <div className='c-player--details'>
            <div>
                <img src={props.song.image} />
            </div>
            <h3 className='song-artist'>{props.song.title}</h3>
            <h4 className='song-title'>{props.song.artist}</h4>
        </div>
    )
}

export default Details
