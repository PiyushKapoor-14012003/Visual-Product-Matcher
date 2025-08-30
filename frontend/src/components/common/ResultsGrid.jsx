import ProductCard from "./ProductCard";

export default function ResultsGrid({ items, similarity }) {
  const filteredItems = items.filter((item) => item.similarity >= similarity);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.length > 0 ? (
        filteredItems.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-600">
          No results found for similarity ≥ {similarity}%
        </p>
      )}
    </div>
  );
}
