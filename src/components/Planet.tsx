import { useRef } from "react"
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import type { PlanetData } from "../data/PlanetData"

interface PlanetProps {
  planet: PlanetData
  isSelected: boolean
  onClick: () => void
}

const Planet: React.FC<PlanetProps> = ({ planet, isSelected, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const texture = useTexture(`/textures/${planet.texture}`)
  const ringTexture = useTexture("/textures/saturn_ring.png") // Add a ring texture

  // Orbit animation
  useFrame(({ clock }) => {
    if (meshRef.current && !isSelected) {
      const angle = (clock.getElapsedTime() / planet.orbitSpeed) % (Math.PI * 2)
      const x = Math.cos(angle) * planet.orbitRadius
      const z = Math.sin(angle) * planet.orbitRadius

      // Update planet position
      meshRef.current.position.set(x, 0, z)

      // Rotate the planet
      meshRef.current.rotation.y += planet.rotationSpeed * 0.01

      // Ensure the ring follows the planet
      if (ringRef.current) {
        ringRef.current.position.set(x, 0, z)
      }
    }
  })

  return (
    <group>
      {/* Planet Sphere */}
      <mesh ref={meshRef} onClick={(e) => { e.stopPropagation(); onClick(); }}>
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial map={texture} metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Saturn's Ring (Only for Saturn) */}
      {planet.name === "Saturne" && (
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[planet.size * 1.8, 0.5, 2, 100]} />
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

export default Planet
