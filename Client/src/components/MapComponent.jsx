import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { mappls, mappls_plugin } from  'mappls-web-maps';

const auto = {
  width: "300px",
  position: "absolute",
  zIndex: 999,
  fontSize: "15px",
  padding: "10px",
  border: "1px solid #ddd",
  outline: "none !important",
};

let apikey = '7783f393-2f77-4ddc-8d7b-0c20327a8005';
const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();


const PinmarkerPlugin = ({ map }) => {
  const pinMarkerRef = useRef(null);

  useEffect(() => {
    if (map && pinMarkerRef.current) {
      pinMarkerRef.current.remove();
      mapplsClassObject.removeLayer({ map, layer: pinMarkerRef.current });
    }

    pinMarkerRef.current = mapplsPluginObject.pinMarker(
      {
        
        map: map,
        pin: ['qt9get',"1qtt9s",'7wwq18','1q2l5y'],
        popupHtml: '<h2 style="color:red">Heavy Traffic</h2>',
      },
      (e) => {
        console.log(e);
      }
    );
    return () => {
      if (map && pinMarkerRef.current) {
        mapplsClassObject.removeLayer({ map, layer: pinMarkerRef.current });
      }
    };
  }, [map]);
};

export default  function MapComponent() {

  const  styleMap  = {width:  '90%', height:  '90vh', display:'inline-block'};


  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    mapplsClassObject.initialize(
      apikey,
      { map: true, plugins: ["marker"] },
      () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
        mapRef.current = mapplsClassObject.Map({
          id: "mapRef",
          properties: {
            //  //Properties Object
            center: [30.20, 78.04], // the coordinates as [lat, lon]
            
            zoom: 10, //the initial Map `zoom` level.
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
    isMapLoaded && <PinmarkerPlugin map={mapRef.current}/>
    }
    </div>

    </>
  )
}
