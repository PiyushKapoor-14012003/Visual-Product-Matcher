import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-3 border rounded-xl shadow bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <SearchIcon
        size={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>
  );
}
