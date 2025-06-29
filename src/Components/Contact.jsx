import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);

  const isFormValid = form.nama && form.email && form.pesan;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submitted:", form);
    setTimeout(() => {
      setForm({
        nama: "",
        email: "",
        pesan: "",
      });

      toast.success("Pesan berhasil dikirim!", {
        autoClose: 2000,
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <motion.section
      id="contact"
      className="max-w-2xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Hubungi Saya
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Ingin bekerja sama atau ngobrol? Hubungi saya lewat sosial media:
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/Sainhasan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:husain.hasan2011@email.com"
          className="text-red-500 hover:underline"
        >
          Email
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg mx-auto"
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs md:text-base"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs md:text-base"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Pesan
            </label>
            <textarea
              name="pesan"
              value={form.pesan}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs md:text-base"
              placeholder="Tulis pesan Anda di sini"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-md transition ${
              isFormValid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="spinner" />
                <span>Mengirim...</span>
              </span>
            ) : (
              "Kirim"
            )}
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
