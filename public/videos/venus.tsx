import React from "react"

const VenusVideo = () => {
    return (
      <div className="flex justify-center">
        <iframe 
            width="660" 
            height="371" 
            src="https://www.youtube.com/embed/EypkiOcEn5w?start=16" 
            title="COMPRENDRE : Venus"
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
      </div>
    )
}

export default VenusVideo