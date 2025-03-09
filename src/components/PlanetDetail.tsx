"use client"

import { useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useParams } from "react-router-dom"
import * as THREE from "three"
import { planetData } from "../data/PlanetData"

const PlanetDetail = () => {
  const { planetName } = useParams()
  const planet = planetData.find((p) => p.name.toLowerCase() === planetName?.toLowerCase())

  if (!planet) return <p className="text-white">Planet not found</p>

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 10]} intensity={0.8} />
        <PlanetBackground planet={planet} />
      </Canvas>

      {/* Planet Description */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-4">{planet.name}</h1>
          <p>{planet.description}</p>
        </div>
      </div>
    </div>
  )
}

const PlanetBackground = ({ planet }: { planet: any }) => {
  const texture = useTexture(`/textures/${planet.name.toLowerCase()}.jpg`)

  return (
    <mesh>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial map={texture} emissive="#222" emissiveIntensity={0.4} />
    </mesh>
  )
}

export default PlanetDetail
