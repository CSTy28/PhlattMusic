import React from 'react'

function Youtube() {
    return (
        <section className='c-youtube--section' id='youtube'>
            <div className='c-youtube--wrapper'>
                <iframe 
                    id="ytplayer" type="text/html" width="640" height="360"
                    src="https://www.youtube.com/embed/_6wxNvIM0JQ"
                    frameBorder="0">
                </iframe>
            </div>
            
        </section>
    )
}

export default Youtube
