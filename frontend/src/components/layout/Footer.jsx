export default function Footer() {
  return (
    <footer className="w-full py-4 border-t border-gray-200 text-center text-sm text-gray-600">
      <nav className="flex justify-center gap-6">
        <a href="#" className="hover:text-purple-600">About</a>
        <a href="#" className="hover:text-purple-600">Privacy</a>
        <a href="#" className="hover:text-purple-600">Contact</a>
      </nav>
      <p className="mt-2">© {new Date().getFullYear()} VisualMatch</p>
    </footer>
  );
}
