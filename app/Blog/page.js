import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Portafolio de Aprendizaje 🚀
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-xl">
          Bienvenido a mi página. Aquí muestro lo que he aprendido y en lo que sigo trabajando
          dentro de mi camino en Ingeniería Informática.
        </p>
      </main>
    </>
  );
}
