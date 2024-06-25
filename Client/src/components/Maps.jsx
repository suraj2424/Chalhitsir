import React, { useEffect, useRef } from 'react';

const Maps = () => {
  const mapRef = useRef(null);
  let map, direction_plugin;

  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = "https://apis.mappls.com/advancedmaps/api/b8f2e7de357a80fc8f0fac3163855129/map_sdk?layer=vector&v=3.0";
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    const loadPluginScript = () => {
      const script = document.createElement('script');
      script.src = "https://apis.mappls.com/advancedmaps/api/939c8b63-b53b-4fae-9c80-ffa3710b7d0a/map_sdk_plugins?v=3.0";
      script.async = true;
      document.body.appendChild(script);
    };

    loadMapScript();
    loadPluginScript();

    return () => {
      // Clean up scripts if needed
    };
  }, []);

  const initMap = () => {
    map = new window.mappls.Map(mapRef.current, {
      center: [28.09, 78.3],
      zoom: 5,
    });

    map.addListener('load', function() {
      const direction_option = {
        map: map,
        divWidth: '350px',
        start: { label: 'mappls', geoposition: "mmi000" },
        end: { label: 'My destination', geoposition: "28.656769,77.203775" },
        Resource: 'route_eta',
        annotations: "nodes,congestion",
        Profile: ['driving', 'biking', 'trucking', 'walking'],
        routeSummary: {
          summarycallback: function(data) {
            console.log(data);
          }
        }
      };

      window.mappls.direction(direction_option, function(data) {
        direction_plugin = data;
        console.log(direction_plugin);
      });
    });
  };

  return (
    <div className="map-container">
      <div className='map-inner'>
        <div id="map" ref={mapRef} className="map"></div>
      </div>
    </div>
  );
};

export default Maps;