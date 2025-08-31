import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/layout/Footer";
import UploadedImageCard from "../components/common/UploadedImageCard";
import ResultsGrid from "../components/common/ResultsGrid";
import Search from "../components/common/search";

export default function Results() {
  const { state } = useLocation();
  const uploadedImage = state?.uploadedImage;

  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (searchQuery.trim()) {
          // ✅ Text search
          const res = await fetch(
            `http://localhost:5000/api/search?query=${encodeURIComponent(searchQuery)}`
          );
          const data = await res.json();
          setItems(data);
        } else {
          // ✅ Default: show 20 products when user comes from landing page
          const res = await fetch("http://localhost:5000/api/products?limit=20");
          const data = await res.json();
          setItems(data);
        }
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200">
      <Navbar />
      <main className="flex-1 px-6 md:px-16 py-12 md:py-20 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Search Results
        </h1>

        <div className="mb-8">
          <Search onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-8">
            <UploadedImageCard image={uploadedImage} />
          </div>
          <div className="md:col-span-3 space-y-8">
            <ResultsGrid items={items} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
