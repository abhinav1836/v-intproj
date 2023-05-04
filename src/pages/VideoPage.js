import React from 'react'
import './VideoPage.css'

function VideoPage() {
  return (
    <div className='video-container'>
        <h1>VIDEO PAGE</h1>
        <iframe width="720" height="540" src="https://www.youtube.com/embed/XEymPGxopmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
        <a href='/' id='link-tag'>
            <button type="button">Back</button>
        </a> 
    </div>
  )
}

export default VideoPage