import React from "react"

const JupiterVideo = () => {
    return (
      <div className="flex justify-center">
        <iframe 
            width="660" 
            height="371" 
            src="https://www.youtube.com/embed/zqpb9qwrrfo" 
            title="Tout comprendre sur : Jupiter"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
      </div>
    )
}

export default JupiterVideo