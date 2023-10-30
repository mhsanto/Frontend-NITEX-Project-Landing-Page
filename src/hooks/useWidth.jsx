import { useState, useEffect } from "react";

function useWidth(targetWidth) {
  const [isDeviceWidthLessThan, setIsDeviceWidthLessThan] = useState(
    window.innerWidth <= targetWidth
  );

  useEffect(() => {
    function handleResize() {
      setIsDeviceWidthLessThan(window.innerWidth <= targetWidth);
    }

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [targetWidth]);

  return isDeviceWidthLessThan;
}

export default useWidth;
