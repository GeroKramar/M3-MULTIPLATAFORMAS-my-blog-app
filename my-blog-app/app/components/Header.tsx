// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/blog">
          <span className="text-white text-lg font-bold">BLOGGEANDO</span>
        </Link>
        <div>
          <Link href="/blog">
            <span className="text-gray-300 hover:text-white mx-2">Blog</span>
          </Link>
          <Link href="/">
            <span className="text-gray-300 hover:text-white mx-2">Salir</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
