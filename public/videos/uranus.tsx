import React from "react"

const UranusVideo = () => {
    return (
      <div className="flex justify-center">
        <iframe 
            width="660" 
            height="371" 
            src="https://www.youtube.com/embed/ZcxXekPsRKU?start=83" 
            title="Uranus"
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
      </div>
    )
}

export default UranusVideo