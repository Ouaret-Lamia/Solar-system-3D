import React from "react"

const MercuryVideo = () => {
    return (
      <div className="flex justify-center">
        <iframe 
            width="660" 
            height="371" 
            src="https://www.youtube.com/embed/AJbQnUju3Kg?start=17" 
            title="Tout comprendre sur : Mercure"
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
      </div>
    )
}

export default MercuryVideo