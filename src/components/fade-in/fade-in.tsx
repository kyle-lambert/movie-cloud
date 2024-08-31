import { motion } from "framer-motion";
import { SetStateAction, useState } from "react";

const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

type FadeInProps = {
  children: (onLoadComplete: () => void) => React.ReactNode;
};

export const FadeIn = ({ children }: FadeInProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoadComplete = () => setHasLoaded(true);

  return (
    <motion.div
      initial="hidden"
      animate={hasLoaded ? "visible" : "hidden"}
      variants={variant}
      style={{
        height: "100%",
        width: "100%",
      }}
      className="fade-in"
    >
      {children(onLoadComplete)}
    </motion.div>
  );
};
