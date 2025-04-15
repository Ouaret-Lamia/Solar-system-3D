import { useState } from "react"

const COLLAPSED_HEIGHT = 80
const WIDTH = 400

const SolarChatbot = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleChat = () => setIsExpanded(true)
  const closeChat = () => setIsExpanded(false)

  return (
    <div
      className="fixed bottom-0 right-0 z-40 transition-all duration-300 overflow-hidden"
      style={{
        width: `${WIDTH}px`,
        height: isExpanded ? "100vh" : `${COLLAPSED_HEIGHT}px`,
        pointerEvents: "auto",
      }}
    >
      {/* Collapsed clickable bar */}
      {!isExpanded && (
        <div
          className="absolute bottom-0 right-0 w-full h-[80px] z-50 pointer-events-auto cursor-pointer bg-[#282828] flex items-center justify-center"
          onClick={toggleChat}
        >
          <span className="text-white font-medium">💬 Avez-vous des questions ?</span>
        </div>
      )}

      {/* Chat iframe — always rendered, visibility controlled by CSS */}
      <iframe
        src="https://app.thinkstack.ai/bot/index.html?chatbot_id=67f2b947bc81233bfb17fe49"
        title="Système solaire"
        width="100%"
        height="100%"
        style={{
          border: "none",
          opacity: isExpanded ? 1 : 0,
          pointerEvents: isExpanded ? "auto" : "none",
          transition: "opacity 0.3s ease",
          backgroundColor: "white",
        }}
        allowFullScreen
      />

      {/* Close button */}
      {isExpanded && (
        <button
          onClick={closeChat}
          className="absolute top-2 right-2 z-50 bg-white text-black px-2 py-1 rounded shadow"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SolarChatbot
