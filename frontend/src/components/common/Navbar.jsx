export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white/70 backdrop-blur">
      <h1 className="text-lg md:text-xl font-bold text-purple-700">
        Visual Product Matcher
      </h1>
      <nav className="flex gap-4 md:gap-8 text-sm md:text-lg text-gray-800 font-medium">
        <a href="#">About</a>
        <a href="#">Docs</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
