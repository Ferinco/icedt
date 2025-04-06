import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export const PhotoCard = ({ image, title, span }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  return (
    <motion.div
      onClick={handleClick}
      className={`relative ${span} cursor-pointer h-[250px] flex flex-col bg-cover bg-center justify-center items-center text-white group`}
      style={{ backgroundImage: `url('${image}')` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className={`absolute inset-0 bg-orange-600 transition-all duration-300 ${
          active ? "opacity-80" : "opacity-0 group-hover:opacity-80"
        }`}
      ></div>

      <Icon
        icon="fluent-mdl2:check-mark"
        width="40"
        height="40"
        className={`z-50 text-white mb-2 transition-all duration-300 ease-in-out ${
          active ? "opacity-100 scale-100" : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
        }`}
      />

      <h3 className="text-2xl font-bold z-10">{title}</h3>
    </motion.div>
  );
};
