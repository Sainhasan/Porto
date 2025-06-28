import { motion } from "framer-motion";

function Skills() {
  const skillList = [
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
    "Github",
    "WordPress",
  ];

  return (
    <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1,}}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
    <section className="max-w-4xl mx-auto mt-16 px-6 py-6 rounded-lg bg-white">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 bg-white shadow-md rounded-xl py-3">
          Skill
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skillList.map((skl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow p-4 text-center hover: hover:bg-blue-50 transition transform"
          >
            <span className="text-lg font-medium text-gray-700">{skl}</span>
          </motion.div>
        ))}
      </div>
    </section>
    </motion.div>
  );
}

export default Skills;
