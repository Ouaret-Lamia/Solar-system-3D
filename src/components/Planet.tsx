"use client"

import type React from "react"
import { useRef } from "react"
import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import type { PlanetData } from "../data/PlanetData"

interface PlanetProps {
  planet: PlanetData
  isSelected: boolean
  onClick: () => void
}

const Planet: React.FC<PlanetProps> = ({ planet, isSelected, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useTexture(`/textures/${planet.texture}`)

  // Self-rotation
  useFrame((_, delta) => {
    if (meshRef.current && !isSelected) {
      meshRef.current.rotation.y += delta * planet.rotationSpeed
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={[planet.orbitRadius, 0, 0]}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <sphereGeometry args={[planet.size, 32, 32]} />
      <meshStandardMaterial map={texture} metalness={0.2} roughness={0.8} />
      {isSelected && (
        <mesh position={[0, planet.size + 0.5, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      )}
    </mesh>
  )
}

export default Planet

