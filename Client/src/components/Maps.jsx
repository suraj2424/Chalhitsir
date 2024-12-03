import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Maps = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [accessToken, setAccessToken] = useState(null);
  const [map, setMap] = useState(null);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startCoordinates, setStartCoordinates] = useState("");
  const [endCoordinates, setEndCoordinates] = useState("");
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const [showStartSuggestions, setShowStartSuggestions] = useState(false);
  const [showEndSuggestions, setShowEndSuggestions] = useState(false);
  const [showMap,setShowMap] = useState(false);

  const images = [
    {
      path:"/images/road1.jpg"
    },
    {
      path:"/images/road2.jpg"
    },
    {
      path:"/images/road3.jpg"
    },
    {
      path:"/images/road4.jpg"
    },
    {
      path:"/images/road5.jpg"
    },
    {
      path:"/images/road6.png"
    },

  ]

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch("/token");
        const data = await response.json();
        if (data.access_token) {
          setAccessToken(data.access_token);
        } else {
          console.error("Failed to fetch the access token");
        }
      } catch (error) {
        console.error("Error fetching the access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      const loadMapScript = () => {
        const script = document.createElement("script");
        script.src =
          "https://apis.mappls.com/advancedmaps/api/b8f2e7de357a80fc8f0fac3163855129/map_sdk?layer=vector&v=3.0";
        script.async = true;
        script.onload = initMap;
        document.body.appendChild(script);
      };

      const loadPluginScript = () => {
        const script = document.createElement("script");
        script.src = `https://apis.mappls.com/advancedmaps/api/${accessToken}/map_sdk_plugins?v=3.0`;
        script.async = true;
        document.body.appendChild(script);
      };

      loadMapScript();
      loadPluginScript();
    }
  }, [accessToken]);

  const initMap = () => {
    const newMap = new window.mappls.Map(mapRef.current, {
      center: [28.09, 78.3],
      zoom: 5,
    });
    setMap(newMap);
  };

  const handleChangeStart = (e) => {
    setStartCoordinates(e.target.value);
    setShowStartSuggestions(true);
  };

  const handleChangeEnd = (e) => {
    setEndCoordinates(e.target.value);
    setShowEndSuggestions(true);
  };

  useEffect(() => {
    let timer;
    if (startCoordinates.trim()) {
      timer = setTimeout(() => {
        window.mappls.search(startCoordinates, function (data) {
          setStartSuggestions(data);
        });
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [startCoordinates]);

  useEffect(() => {
    let timer;
    if (endCoordinates.trim()) {
      timer = setTimeout(() => {
        window.mappls.search(endCoordinates, function (data) {
          setEndSuggestions(data);
        });
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [endCoordinates]);

  const selectedSuggestedStartIndex = (index) => {
    const suggestion = startSuggestions[index];
    setStartCoordinates(`${suggestion.placeName}, ${suggestion.placeAddress}`);
    setStartLocation(suggestion.eLoc);
    setShowStartSuggestions(false);
  };

  const selectedSuggestedEndIndex = (index) => {
    const suggestion = endSuggestions[index];
    setEndCoordinates(`${suggestion.placeName}, ${suggestion.placeAddress}`);
    setEndLocation(suggestion.eLoc);
    setShowEndSuggestions(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowStartSuggestions(false);
        setShowEndSuggestions(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !document.getElementById("loc-start").contains(e.target) &&
        !document.querySelector(".loc-1-b")?.contains(e.target)
      ) {
        setShowStartSuggestions(false);
      }

      if (
        !document.getElementById("loc-end").contains(e.target) &&
        !document.querySelector(".loc-2-b")?.contains(e.target)
      ) {
        setShowEndSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDirections = () => {
    if (mapContainerRef.current) {
      mapContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (map && startLocation && endLocation) {
      const directionOptions = {
        map: map,
        start: startLocation, // e.g., 'MMI000' for start eLoc
        end: endLocation, // e.g., 'MMI123' for end eLoc
        Profile: ["driving", "biking", "trucking", "walking"], // Change to 'walking', 'biking', etc., if necessary
        resource: "route_eta",
        annotations: "nodes,congestion",
      };

      // Removing previous directionOptions bar with the class "mmiDRo"
      const directionBar = document.querySelector(".mmiDRo");
      if (directionBar) {
        directionBar.remove();
      }

      window.mappls.direction(directionOptions, function (response) {
        if (response && response.All_routes && response.All_routes.length > 0) {
          // Loop through each route in All_routes
          response.All_routes.forEach((route, index) => {
            if (route[0] && route[0].getPath) {
              const coordinates = route[0]
                .getPath()
                .map((coord) => [coord.lng, coord.lat]);

              const routeGeoJSON = {
                type: "Feature",
                geometry: {
                  type: "LineString",
                  coordinates: coordinates,
                },
              };

              // Add new route layer or update existing one
              map.addSource("route", {
                type: "geojson",
                data: routeGeoJSON,
              });

              map.addLayer({
                id: "route",
                type: "line",
                source: "route",
                layout: {
                  "line-join": "round",
                  "line-cap": "round",
                },
                paint: {
                  "line-color": "#1db7dd",
                  "line-width": 5,
                },
              });

              map.fitBounds(
                [
                  [
                    Math.min(...coordinates.map((coord) => coord[0])),
                    Math.min(...coordinates.map((coord) => coord[1])),
                  ],
                  [
                    Math.max(...coordinates.map((coord) => coord[0])),
                    Math.max(...coordinates.map((coord) => coord[1])),
                  ],
                ],
                { padding: 20 }
              );
            } else {
              console.error(`Route ${index} does not have valid coordinates.`);
            }
          });
        } else {
          console.error("No routes found in the response.");
        }
      });
    } else {
      console.error("Map or locations are not defined.");
    }
  };

  return (
    <div className="map-container">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="map-inner">
        <h1>Find your directions</h1>
        <div className="map-upper">
          <div className="loc-1">
            <div className="loc-1-a">
              <p>From</p>
              <input
                type="text"
                id="loc-start"
                onChange={handleChangeStart}
                value={startCoordinates}
                placeholder="Enter start city"
              />
            </div>
            {startSuggestions.length > 0 && showStartSuggestions && (
              <div
                className="loc-1-b"
                style={{
                  overflowY: startSuggestions.length > 5 ? "auto" : "hidden",
                }}
              >
                {startSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="loc-start-sugg"
                    onClick={() => selectedSuggestedStartIndex(index)}
                  >
                    <div className="loc-start-suggest">
                      <p>
                        <FaMapMarkerAlt className="marker-loc-start" />
                      </p>
                      <p>
                        {suggestion.placeName}, {suggestion.placeAddress}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="loc-2">
            <div className="loc-2-a">
              <p>To</p>
              <input
                type="text"
                id="loc-end"
                onChange={handleChangeEnd}
                value={endCoordinates}
                placeholder="Enter end city"
              />
            </div>
            {endSuggestions.length > 0 && showEndSuggestions && (
              <div
                className="loc-2-b"
                style={{
                  overflowY: endSuggestions.length > 5 ? "auto" : "hidden",
                }}
              >
                {endSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="loc-end-sugg"
                    onClick={() => selectedSuggestedEndIndex(index)}
                  >
                    <div className="loc-end-suggest">
                      <p>
                        <FaMapMarkerAlt className="marker-loc-end" />
                      </p>
                      <p>
                        {suggestion.placeName}, {suggestion.placeAddress}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="loc-3">
            <button onClick={getDirections}>Get Directions</button>
          </div>
        </div>
        <div className="map-map" ref={mapContainerRef}>
          <div id="map" ref={mapRef} className="map"></div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
