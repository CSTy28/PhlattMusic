import React from 'react'

function Testing(props) {
    return (
        <div>
            <ul>
                hi
                {props.songs.map(song => (
                    <li key={song.id}><button >{song.title}</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Testing
