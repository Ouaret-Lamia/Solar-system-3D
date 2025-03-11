import { useRef } from "react"
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
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
      <Canvas camera={{ position: [6, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 10]} intensity={50} />
        <PlanetBackground planet={planet} />
      </Canvas>

      {/* Planet Description */}
      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
        <div className="max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-4">{planet.name}</h1>
          <p>{planet.description}</p>
        </div>
      </div> */}
    </div>
  )
}

const PlanetBackground = ({ planet }: { planet: any }) => {
  const texture = useTexture(`/textures/${planet.name.toLowerCase()}.jpg`)
  const ringTexture = useTexture("/textures/saturn_ring.png")
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  // Rotate the planet and the ring
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002 // Planet rotation speed
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.2 // Keep the ring tilted
      ringRef.current.rotation.z += 0.002 // Make the ring rotate slightly
    }
  })

  return (
    <group>
      {/* Planet Sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={texture} emissive="#222" emissiveIntensity={0.7} />
      </mesh>

      {/* Saturn's Ring */}
      {planet.name === "Saturn" && (
        <mesh ref={ringRef} rotation={[-Math.PI / 2.2, -0.32, 2]}>
          <torusGeometry args={[7, 1, 2, 100]} />
          <meshStandardMaterial 
            map={ringTexture} 
            side={THREE.DoubleSide} 
            transparent 
          />
        </mesh>
      )}
    </group>
  )
}

export default PlanetDetail
