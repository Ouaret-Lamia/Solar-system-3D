const SolarChatbot = () => {
  return (
    <div className="absolute bottom-0 right-0 z-50">
      <div style={{ width: '100%', height: '600px' }}>
        <iframe
          src="https://app.thinkstack.ai/bot/index.html?chatbot_id=67f2b947bc81233bfb17fe49&type=bar"
          title="Système solaire"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allowFullScreen
        ></iframe>
      </div>
  </div>
  )
}

export default SolarChatbot
