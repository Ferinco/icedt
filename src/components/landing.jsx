import { motion } from "framer-motion";

export const Landing = () => {
  const selects = ["A weekend", "A week", "A month", "A few days, specify."];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container px-3 sm:px-0 mx-auto w-full my-20 lg:px-20 mt-44"
    >
      <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col gap-7">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-7xl font-bold"
        >
          Find An Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          To find the best experiences, we will ask you a few questions and
          show you experiences based on your preferences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col items-start gap-2 mt-10"
        >
          <p>How much time do you have?</p>
          <div className="flex flex-wrap sm:flex-nowrap gap-x-4 gap-y-1 items-center">
            {selects.map((select, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 flex-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              >
                <input type="checkbox" />
                <p className="text-nowrap">{select}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
