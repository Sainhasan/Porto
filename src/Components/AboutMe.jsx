import PF from "../assets/PF.jpg";
import {motion} from "framer-motion";

function AboutMe(){
    return(
        <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
        <section id="aboutme" className="py-16 px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-600 mb-6">Tentang Saya</h2>
            <img src={PF} alt="Foto Profil" className="mx-auto w-32 rounded-md object-cover mb-4 shadow-lg" />
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Halo! Saya <span className="font-semibold text-blue-600">Hasan</span> seorang mahasiswa Sistem Informasi yang sedang belajar React dan Tailwind. Saya sangat antusias untuk menjadi seorang Web Engineer yang bisa membuat website keren dan bermanfaat.
            </p>
        </section>
        </motion.div>
    );
}

export default AboutMe;