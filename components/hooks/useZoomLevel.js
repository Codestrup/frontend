import { useState, useEffect } from "react";

const useZoomLevel = () => {
  // Set initial zoom level to 1 in case `window` is not available (on server)
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    // Check if the window object is available (client-side only)
    if (typeof window !== "undefined") {
      // Function to detect the zoom level
      const detectZoomLevel = () => {
        setZoomLevel(window.devicePixelRatio);
      };

      // Set the initial zoom level when component mounts
      detectZoomLevel();

      // Listen for zoom level changes
      window.addEventListener("resize", detectZoomLevel);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", detectZoomLevel);
      };
    }
  }, []);

  return zoomLevel;
};

export default useZoomLevel;