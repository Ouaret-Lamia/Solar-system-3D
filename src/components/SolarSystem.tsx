import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import PlanetSystem from "./PlanetSystem"
import { useNavigate } from "react-router-dom"

import SolarChatbot from "./SolarChat"

const SolarSystem: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)
  const controlsRef = useRef(null)
  const navigate = useNavigate()

  const handlePlanetClick = (planetName: string) => {
    navigate(`/planet/${planetName}`) 
  }

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev)
    }, 7000) // affiche/masque toutes les 7 secondes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 20, 70], fov: 60 }}>
        <ambientLight intensity={0.3} />
        {/* <directionalLight position={[-180, 0, 0]} intensity={1.0} /> */}
        <pointLight position={[0, 0, 0]} intensity={1} color="white" />
        <PlanetSystem selectedPlanet={selectedPlanet} onPlanetClick={handlePlanetClick} controlsRef={controlsRef} />
        <Stars radius={400} depth={100} count={1500} factor={2} />
        <OrbitControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={100}
        />
      </Canvas>

      {!selectedPlanet && (
        <div
          className={`
            absolute top-4 left-4 text-white bg-[#282828] bg-opacity-50 p-4 rounded-lg max-w-xs
            transition-all duration-1000 ease-in-out
            transform
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-70"}
          `}
        >
          <h2 className="text-xl font-bold mb-2">Système Solaire Interactif</h2>
          <p>Cliquez sur une planète pour zoomer et en apprendre plus à son sujet.</p>
        </div>
      )}
      
      <SolarChatbot/>

    </div>
  )
}

export default SolarSystem

