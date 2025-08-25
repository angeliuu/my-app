export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        ¡Hola, soy Angeliuu 🚀
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        Esta es mi primera página en Next.js desplegada en Vercel.  
        Estoy aprendiendo a usar GitHub, Vercel y React con TailwindCSS. 💻✨
      </p>

      <a
        href="https://github.com/angeliuu"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Ver mi GitHub
      </a>
    </main>
  );
}
