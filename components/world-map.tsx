"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const locations = [
  { name: "Mauritius", coordinates: [57.55, -20.35] as [number, number], anchor: "start" as const },
  { name: "United Arab Emirates", coordinates: [54.5, 24.0] as [number, number], anchor: "end" as const },
]

export function WorldMap() {
  return (
    <div className="w-full">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 165 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(215 40% 24%)"
                stroke="hsl(216 62% 8%)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "hsl(215 40% 30%)", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {locations.map((loc) => (
          <Marker key={loc.name} coordinates={loc.coordinates}>
            <circle r={9} fill="hsl(41 46% 50%)" fillOpacity={0.25} />
            <circle r={4} fill="hsl(41 55% 62%)" stroke="hsl(216 62% 8%)" strokeWidth={1} />
            <text
              textAnchor={loc.anchor}
              y={-14}
              x={loc.anchor === "start" ? 10 : -10}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 600,
                fill: "#ffffff",
              }}
            >
              {loc.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}
