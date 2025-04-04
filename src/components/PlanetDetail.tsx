import { useRef } from "react"
import { useTexture } from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber"
import { useParams } from "react-router-dom"
import * as THREE from "three"
import { planetData } from "../data/PlanetData"

const PlanetDetail = () => {
  const { planetName } = useParams()
  const planet = planetData.find((p) => p.name.toLowerCase() === planetName?.toLowerCase())

  if (!planet) return <p className="text-white">Planet not found</p>

  return (
    <div className="relative min-h-screen">
      {/* Canvas Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <Canvas camera={{ position: [6, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 10]} intensity={50} />
          <PlanetBackground planet={planet} />
        </Canvas>
      </div>

      {/* Scrollable content */}
      <div className="px-25 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 bg-black/40">
        <div className="col-span-2">
          <h1 className="text-6xl font-bold mb-6 text-center">{planet.name}</h1>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Distance du soleil :</h3>
          <p className="mb-4">{planet.distanceFromSun}</p>
          
          <h3 className="text-2xl font-bold mb-2">Diamètre :</h3>
          <p className="mb-4">{planet.diameter}</p>
          
          <h3 className="text-2xl font-bold mb-2">Durée du jour :</h3>
          <p className="mb-4">{planet.dayLength}</p>
          
          <h3 className="text-2xl font-bold mb-2">Durée de l'année :</h3>
          <p className="mb-4">{planet.yearLength}</p>
          
          <h3 className="text-2xl font-bold mb-2">Description :</h3>
          <p className="mb-4">{planet.description}</p>
          
          <h3 className="text-2xl font-bold mb-2">Composition :</h3>
          <p className="mb-4">{planet.composition}</p>

          
        </div>

        {/* Video */}
        <div className="flex justify-center row-span-2">
          {/* <video controls className="w-full max-w-md shadow-lg fixed">
            <source src={`/videos/${planet.name.toLowerCase()}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        
        {/* Photo Gallery */}
        <div className="col-span-2 mt-10">
          <h3 className="text-3xl font-bold mb-6 text-white text-center">Galerie de Photos</h3>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <img
                key={index}
                src={`/images/${planet.name.toLowerCase()}/${planet.name.toLowerCase()}-${index}.png`}
                alt={`${planet.name} photo ${index}`}
                className="w-full rounded-lg shadow-md"
              />
            ))}
          </div>
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

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.002
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.2
      ringRef.current.rotation.z += 0.002
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={texture} emissive="#222" emissiveIntensity={0.7} />
      </mesh>
      {planet.name === "Saturne" && (
        <mesh ref={ringRef} rotation={[-Math.PI / 2.2, -0.32, 2]}>
          <torusGeometry args={[7, 1, 2, 100]} />
          <meshStandardMaterial map={ringTexture} side={THREE.DoubleSide} transparent />
        </mesh>
      )}
    </group>
  )
}

export default PlanetDetail
