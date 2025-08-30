export default function ProductCard({ title, category, image, similarity }) {
  return (
    <div className="bg-white/60 rounded-xl shadow p-4 flex flex-col hover:shadow-lg hover:scale-105 transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm italic text-gray-600">{category}</p>
      <img
        src={image}
        alt={title}
        className="mt-2 h-32 object-contain mx-auto"
      />
      <div className="flex justify-between items-center mt-3 text-sm">
        <span className="text-gray-700">Similarity</span>
        <span className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-lg">
          {similarity}%
        </span>
      </div>
    </div>
  );
}
