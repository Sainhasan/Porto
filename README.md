# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


🛠️ Setup & Dependensi Project Portfolio

Catatan ini untuk saya sendiri jika ingin setup ulang atau lupa package yang digunakan.

📦 Package yang Wajib Diinstall

npm install react react-dom
npm install vite
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

✨ Tambahan Library yang Digunakan

Untuk animasi:

npm install framer-motion

Untuk scroll smooth:

npm install react-scroll

Untuk notifikasi:

npm install react-toastify

🚀 Cara Setup Ulang dari Nol

Clone atau buka folder project

Jalankan:

npm install
npm run dev

Jika tailwind tidak jalan, cek ulang tailwind.config.js agar mengandung:

content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
]

Pastikan ToastContainer dimount di App.jsx jika pakai react-toastify

🗃️ Struktur Folder Pendukung

/src
  /assets     ← gambar statis
  /Components ← komponen-komponen utama (Navbar, Footer, Intro, dll)
  App.jsx     ← entry point UI
  main.jsx    ← mounting React

🧹 Perintah Build

npm run build

🌍 Deploy

Gunakan Vercel untuk deployment otomatis.

Perhatikan error path gambar saat deploy: gunakan path relatif dari public/ atau pastikan path valid saat build.