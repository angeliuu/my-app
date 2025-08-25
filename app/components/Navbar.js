import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-center space-x-6 shadow-md">
      <Link href="/" className="hover:text-blue-400">Inicio</Link>
      <Link href="/sobre-mi" className="hover:text-blue-400">Sobre mi</Link>
      <Link href="/aprendizaje" className="hover:text-blue-400">Aprendizaje</Link>
      <Link href="/proyectos" className="hover:text-blue-400">Proyectos</Link>
      <Link href="/blog" className="hover:text-blue-400">Blog</Link>
      <Link href="/contacto" className="hover:text-blue-400">Contacto</Link>
    </nav>
  );
}
