import {motion} from "framer-motion";
function Intro(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mt-8 bg-white shadow-md rounded-lg p-4 w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Perkenalkan</h2>
        <p className="text-gray-600 mt-2">
          Saya <span className="font-bold text-blue-600">{props.nama}</span>,
          dan saya ingin menjadi seorang{" "}
          <span className="italic text-blue-500">{props.Cita}</span>.
        </p>
      </div>
    </motion.div>
  );
}

export default Intro;
