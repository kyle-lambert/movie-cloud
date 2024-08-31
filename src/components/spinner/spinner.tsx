import { motion } from "framer-motion";

import "./styles.scss";

export const Spinner = () => {
  return (
    <div className="spinner">
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 0.75,
          ease: "linear",
        }}
        className="spinner-circle"
      />
    </div>
  );
};
