import { useState } from "react";
import Card from "../components/common/Card";
import Filter from "../components/common/Filter";

export default function Results() {
  const [minScore, setMinScore] = useState(80);
  const [sortOrder, setSortOrder] = useState("desc");

  const dummyResults = [
    { image: "https://via.placeholder.com/300", title: "Product 1", description: "This is product 1", score: 92 },
    { image: "https://via.placeholder.com/300", title: "Product 2", description: "This is product 2", score: 88 },
    { image: "https://via.placeholder.com/300", title: "Product 3", description: "This is product 3", score: 75 },
    { image: "https://via.placeholder.com/300", title: "Product 4", description: "This is product 4", score: 60 },
  ];

  // Filter + Sort
  let filteredResults = dummyResults.filter((item) => item.score >= minScore);
  filteredResults = filteredResults.sort((a, b) =>
    sortOrder === "asc" ? a.score - b.score : b.score - a.score
  );

  return (
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-6">Results</h2>

      <Filter
        minScore={minScore}
        setMinScore={setMinScore}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No results match your filter.</p>
      )}
    </main>
  );
}
