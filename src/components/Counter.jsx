import { animate, useMotionValue, useTransform,motion } from "framer-motion";
import { useEffect } from "react";


// eslint-disable-next-line react/prop-types
export default function Counter({ dataTarget }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, dataTarget, {
      duration: 5
    });

    return animation.stop;
  }, [count, dataTarget]);

  return <motion.h1  viewport={{ once: true }} className="font-semibold text-2xl">{rounded}</motion.h1>;
}
