import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [time, setTime] = useState(0);
  const [active, isActive] = useState(false);
  const btn = useRef(null);

  const Start = () => {
    if (!btn.current) {
      btn.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      isActive(true);
    }
  };

  const Stop = () => {
    if (btn.current) {
      clearInterval(btn.current);
      btn.current = null;
      isActive(false);
    }
  };

  const Reset = () => {
    Stop();
    setTime(0);
  };

  return (
    <motion.div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        borderRadius: "10px",
      }}
      animate={{
        background: active
          ? [
              "linear-gradient(45deg, #4CAF50, #81C784)", 
              "linear-gradient(45deg, #81C784, #4CAF50)", 
            ]
          : "linear-gradient(45deg, #f0f0f0, #dcdcdc)",
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <motion.div
        animate={{ scale: active ? 1.2 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}>
        Count-Down: {time}
      </motion.div>

      <motion.button whileTap={{ scale: 0.9 }} onClick={Start}>
        Start
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }} onClick={Stop}>
        Stop
      </motion.button>
      <motion.button whileTap={{ scale: 0.9 }} onClick={Reset}>
        Reset
      </motion.button>
    </motion.div>
  );
};

export default App;
