import { useRef, useEffect } from "react";
import "./style.css";

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div className="my-map" ref={ref} id="map" />;
}

export default MyMapComponent;
