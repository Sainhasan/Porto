export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center px-4 py-12 text-center"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
        Halo Saya Hasan
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6">
        Saya sedang belajar{" "}
        <strong className="text-blue-700">React + Tailwind</strong> karena
        pengen banget jadi Web Engineer.
      </p>
    </section>
  );
}
