import type React from "react"
import { useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import PlanetSystem from "./PlanetSystem"
import PlanetInfo from "./PlanetInfo"
import { planetData } from "../data/PlanetData"
import { useNavigate } from "react-router-dom"

const SolarSystem: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)
  const controlsRef = useRef(null)
  const navigate = useNavigate()

  const handlePlanetClick = (planetName: string) => {
    navigate(`/planet/${planetName}`) 
  }

  const handleReturnToView = () => {
    setSelectedPlanet(null)
  }

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

      {selectedPlanet && (
        <PlanetInfo planet={planetData.find((p) => p.name === selectedPlanet)!} onClose={handleReturnToView} />
      )}

      {!selectedPlanet && (
        <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-lg max-w-xs">
          <h2 className="text-xl font-bold mb-2">Interactive Solar System</h2>
          <p>Click on any planet to zoom in and learn more about it.</p>
        </div>
      )}
    </div>
  )
}

export default SolarSystem

