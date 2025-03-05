import type React from "react"
import type { PlanetData } from "../data/PlanetData"
import { X } from "lucide-react"

interface PlanetInfoProps {
  planet: PlanetData
  onClose: () => void
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet, onClose }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-6 rounded-t-lg max-h-[40vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">{planet.name}</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-lg mb-4">{planet.description}</p>

          <h3 className="text-xl font-semibold mb-2">Key Facts</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Distance from Sun:</span> {planet.distanceFromSun}
            </li>
            <li>
              <span className="font-medium">Diameter:</span> {planet.diameter}
            </li>
            <li>
              <span className="font-medium">Day Length:</span> {planet.dayLength}
            </li>
            <li>
              <span className="font-medium">Year Length:</span> {planet.yearLength}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Composition</h3>
          <p>{planet.composition}</p>

          {planet.moons > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Moons</h3>
              <p>
                {planet.moons} {planet.moons === 1 ? "moon" : "moons"}
              </p>
              {planet.notableMoons && <p className="mt-2">Notable: {planet.notableMoons}</p>}
            </div>
          )}

          <div className="mt-4">
            <button onClick={onClose} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
              Return to Solar System
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfo

