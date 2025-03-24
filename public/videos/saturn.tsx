import React from "react"

const SaturnVideo = () => {
    return (
      <div className="flex justify-center">
        <iframe
          width="660"
          height="371"
          src="https://www.youtube.com/embed/XdfON21kiW4?start=94" 
          title="Les 10 faits les plus incroyables sur Saturne !"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    )
}
  
export default SaturnVideo  