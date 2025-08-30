import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/layout/Footer";
import UploadedImageCard from "../components/common/UploadedImageCard";
import Filters from "../components/common/Filters";
import ResultsGrid from "../components/common/ResultsGrid";

export default function Results() {
  const [similarity, setSimilarity] = useState(0);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const generateProducts = (count, page) => {
    const sampleProducts = [
      { title: "Tote Bag", category: "Accessories", image: "https://via.placeholder.com/150/FFCBA4", similarity: 92 },
      { title: "Crossbody Bag", category: "Accessories", image: "https://via.placeholder.com/150/B5651D", similarity: 82 },
      { title: "Leather Belt", category: "Accessories", image: "https://via.placeholder.com/150/8B4513", similarity: 89 },
      { title: "Running Shoes", category: "Shoes", image: "https://via.placeholder.com/150/EEE", similarity: 87 },
      { title: "Shoes", category: "Shoes", image: "https://via.placeholder.com/150/FFF", similarity: 83 },
    ];
    return Array.from({ length: count }, (_, i) => ({
      ...sampleProducts[i % sampleProducts.length],
      id: page * 100 + i,
    }));
  };

  useEffect(() => {
    setItems(generateProducts(6, page));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 50 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) {
      setItems((prev) => [...prev, ...generateProducts(6, page)]);
    }
  }, [page]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200">
      <Navbar />
      <main className="flex-1 px-6 md:px-16 py-12 md:py-20 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Search Results
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-8">
            <UploadedImageCard />
          </div>
          <div className="md:col-span-3 space-y-8">
            <Filters similarity={similarity} setSimilarity={setSimilarity} />
            <ResultsGrid items={items} similarity={similarity} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
