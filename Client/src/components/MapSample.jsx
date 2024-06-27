import React, { useEffect, useState, useRef } from 'react';
import { mappls, mappls_plugin } from  'mappls-web-maps';
// require('dotenv').config;

let apikey ="6eb75952-7043-40d6-9e5f-36fb2a8eac33";
const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();

const DirectionPlugin = ({ map }) => {
  const directionRef = useRef(null);

  useEffect(() => {
    if (map && directionRef.current) {
      directionRef.current.remove();
      mapplsClassObject.removeLayer({ map, layer: directionRef.current });
    }

    directionRef.current = mapplsPluginObject.direction(
      {
        Resource: "route_eta",
        annotations: "nodes,congestion",
        map: map,
        start:null,
        end:null,
      },
      (e) => {
        console.log(e);
      }
    );
    return () => {
      if (map && directionRef.current) {
        mapplsClassObject.removeLayer({ map, layer: directionRef.current });
      }
    };
  }, [map]);
};


export default function MapSample() {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const loadObject = { map: true, plugins: ["direction"] };

  useEffect(() => {
    mapplsClassObject.initialize(apikey, loadObject, () => {
      const newMap = mapplsClassObject.Map({
        id: "map",
        properties: {
          center: [30.20, 78.04],
          zoom: 5,
        },
      });

      newMap.on("load", () => {
        setIsMapLoaded(true);
      });
      mapRef.current = newMap;
    });
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);


  return (
    <>
    <div>
      Map Route
    </div>
      <div id='map' style={{width:  '100%', height:  '90vh', display:'inline-block'}}>
      {isMapLoaded && <DirectionPlugin map={mapRef.current} />}
      </div>
    </>
  );
};
