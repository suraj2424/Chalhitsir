import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { mappls, mappls_plugin } from  'mappls-web-maps';


let apikey = '6eb75952-7043-40d6-9e5f-36fb2a8eac33';
const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();
// console.log(mapplsClassObject);


const PinmarkersPlugin = ({ map }) => {
  const pinMarkersRef = useRef(null);

  let geoData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          htmlPopup: `<h2 style = "color: #00698f">Heavy Traffic </h2>`,
          icon: "https://apis.mapmyindia.com/map_v3/1.png",
        },
        geometry: {
          type: "Point",
          coordinates: [30.054570746528846, 78.22007074493854],
        },
      },
      {
        type: "Feature",
        properties: {
          htmlPopup: `<h2 style = "color: #00698f">Heavy Traffic </h2>`,
          icon: "https://apis.mapmyindia.com/map_v3/1.png",
        },
        geometry: {
          type: "Point",
          coordinates: [30.116110691341547, 78.28309192626698],
        },
      },
      {
        type: "Feature",
        properties: {
          htmlPopup: `<h2 style = "color: #00698f">Landslide </h2>`,
          icon: "https://apis.mapmyindia.com/map_v3/1.png",
        },
        geometry: {
          type: "Point",
          coordinates: [30.118718492663167, 78.37159409255548],
        },
      },
    ],
  };

  useEffect(() => {
    if (map && pinMarkersRef.current) {
      pinMarkersRef.current.remove();
      mapplsClassObject.removeLayer({ map, layer: pinMarkersRef.current });
    }

    pinMarkersRef.current = mapplsClassObject.addGeoJson(
      {
         map: map,
         data: geoData, 
         fitbounds: true, 
         cType: 0 
        },
      (e) => {
        console.log(e);
      }
    );
    return () => {
      if (map && pinMarkersRef.current) {
        mapplsClassObject.removeLayer({ map, layer: pinMarkersRef.current });
      }
    };
  }, [map]);
};

export default  function MapComponent() {

  const  styleMap  = {width:  '100%', height:  '90vh', display:'inline-block'};


  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    mapplsClassObject.initialize(
      apikey,
      { 
        map: true, 
        plugins: ["marker"] 
      },
      () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
        mapRef.current = mapplsClassObject.Map({
          id: "mapRef",
          properties: {
            //  //Properties Object
            center: [30.20, 78.04], // the coordinates as [lat, lon]
            
            zoom: 9, //the initial Map `zoom` level.
            },
        });
        mapRef.current.on("load", () => {
          setIsMapLoaded(true);
        }); 
      }
    );

    return ()=>{
      if(mapRef.current){
        mapRef.current.remove();
        }
    }
  }, []);

  return (
    <>
    <div>MapComponent</div>

    <div  id="mapRef"  style={styleMap}>
    
    {
    isMapLoaded && <PinmarkersPlugin map={mapRef.current}/>
    }
    </div>

    </>
  )
}
