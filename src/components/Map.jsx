import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58.0, 12.0, 0],
        center: [-5, -3],
        scale: 1200
      }}

      style={{width: "100%", height: "100%", paddingTop: "1px"}}

    >
      <Geographies
        geography="/features.json"
        fill="#26003f"
        stroke="#FFFFFF"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      <Annotation
        subject={[-61.90190288860727, -11.167406406017548]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"Presidente Médici"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
