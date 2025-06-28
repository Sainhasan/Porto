import Project from "../Data/Project.json";
import { motion } from "framer-motion";

function ProjectList() {
  return (
    <section className="max-w-4xl mx-auto mt-16 px-6">
        <motion.div
        initial={{ opacity: 0, x: 10}}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 2, ease:"easeOut"}}
            viewport={{ once: true }}>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Project Saya
      </h2>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2 text-center">
        {Project.map((Project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 1}}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow p-6 "
          >
            <h3 className="text-xl font-semi-bold text-blue-700 mb-2">
              {Project.title}
            </h3>
            <p className="text-gray-600 text-sm">{Project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
