import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from "react-ticker"

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
          <div className="videoFooter__text">
<h3>@{channel}</h3>
<p>{description}</p>
<div className="videoFooter__ticker">
<MusicNoteIcon  className="videoFooter__icon"/>
<Ticker mode="smooth">
{({ index }) => (
    <>
    <p>{song}</p>
    </>
)}
</Ticker>
</div>
          </div>
          <img 
          className="videoFooter__record" alt="record"
          src="data:image/png;base64,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" />
        </div>
    )
}

export default VideoFooter
