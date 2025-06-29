import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-red-600 text-gray-600 text-center py-6 shadow-inner"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Hasan Portfolio. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
