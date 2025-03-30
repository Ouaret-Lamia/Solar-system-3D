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
      <div className = "grid grid-cols-2 absolute inset-0 bg-transparent bg-opacity-10 text-white p-15">
        <div className = "max-w-lg">
          <h1 className = "text-5xl font-bold mb-4 text-center">{planet.name}</h1><br/>
          <h3 className = "text-2xl font-bold mb-4">Description :</h3>
          <p>{planet.description}</p><br/>
          <h3 className = "text-2xl font-bold mb-4">Composition :</h3>
          <p>{planet.composition}</p>
        </div>
        <div>
          <video controls className="w-full rounded-lg shadow-lg">
            <source src={`/videos/${planet.name.toLowerCase()}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
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
      {planet.name === "Saturne" && (
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
