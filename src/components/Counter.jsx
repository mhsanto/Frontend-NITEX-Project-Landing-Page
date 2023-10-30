import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types


export default function Counter({ dataTarget }) {
  const [count, setCount] = useState(0);
  const target = parseInt(dataTarget);
  const increment = target / 2000
  useEffect(() => {
    let animationFrameId;

    const updateCounter = () => {
      if (count < target) {
        setCount((prevCount) => prevCount + increment);
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    if (count < target) {
      updateCounter();
    }

    return () => {
      // Clean up the animation frame when the component unmounts
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, increment, count]);

  return <div className="font-semibold">{Math.ceil(count)}</div>;
}
