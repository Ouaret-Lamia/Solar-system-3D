import type React from "react"
import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import Planet from "./Planet"
import { planetData } from "../data/PlanetData"
import * as THREE from "three"

interface PlanetSystemProps {
  selectedPlanet: string | null
  onPlanetClick: (name: string) => void
  controlsRef: React.RefObject<any>
}

const PlanetSystem: React.FC<PlanetSystemProps> = ({ selectedPlanet, onPlanetClick, controlsRef }) => {
  const groupRef = useRef<THREE.Group>(null)
  const sunTexture = useTexture("/textures/sun.jpg")

  // Handle camera movement to selected planet
  useEffect(() => {
    if (!controlsRef.current) return

    if (selectedPlanet) {
      const planet = planetData.find((p) => p.name === selectedPlanet)
      if (planet) {
        const position = new THREE.Vector3(planet.orbitRadius * 0.8, planet.size * 3, planet.orbitRadius * 0.8)

        controlsRef.current.target.set(planet.orbitRadius, 0, 0)
        controlsRef.current.object.position.copy(position)
        controlsRef.current.update()
      }
    } else {
      // Reset to default view
      controlsRef.current.reset()
    }
  }, [selectedPlanet, controlsRef])

  // Animate planet orbits
  useFrame((_, delta) => {
    if (groupRef.current && !selectedPlanet) {
      planetData.forEach((planet, i) => {
        const planetMesh = groupRef.current?.children[i + 1] // +1 to skip the sun
        if (planetMesh) {
          // Rotate around the sun
          const angle = (Date.now() / (planet.orbitSpeed * 1000)) % (Math.PI * 2)
          planetMesh.position.x = Math.cos(angle) * planet.orbitRadius
          planetMesh.position.z = Math.sin(angle) * planet.orbitRadius

          // Rotate the planet itself
          planetMesh.rotation.y += delta * planet.rotationSpeed
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={sunTexture} emissive="#FFD046" emissiveIntensity={0.2} />
        <pointLight   
          position={[0, 0, 0]} 
          intensity={1000} // Adjust brightness
          distance={10000} // Controls how far the light reaches
          decay={2} // How quickly light fades
          castShadow
        />
      </mesh>

      {/* Orbit lines */}
      {planetData.map((planet) => (
        <line key={`orbit-${planet.name}`}>
          <bufferGeometry attach="geometry">
            <float32BufferAttribute
              attach="attributes-position"
              array={
                new Float32Array(
                  Array.from({ length: 65 }, (_, i) => {
                    const angle = (i / 64) * Math.PI * 2
                    return [Math.cos(angle) * planet.orbitRadius, 0, Math.sin(angle) * planet.orbitRadius]
                  }).flat(),
                )
              }
              count={65}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#666666" opacity={0.1} transparent />
        </line>
      ))}

      {/* Planets */}
      {planetData.map((planet) => (
        <Planet
          key={planet.name}
          planet={planet}
          isSelected={selectedPlanet === planet.name}
          onClick={() => onPlanetClick(planet.name)}
        />
      ))}
    </group>
  )
}

export default PlanetSystem

