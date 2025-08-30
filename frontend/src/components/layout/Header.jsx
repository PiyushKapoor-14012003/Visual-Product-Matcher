import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      <Link to="/" className="text-xl font-bold text-purple-700">
        Visual Product Matcher
      </Link>
      <nav className="flex gap-6 text-gray-700">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/results" className="hover:text-purple-600">Results</Link>
        <a href="#" className="hover:text-purple-600">Docs</a>
      </nav>
    </header>
  );
}
