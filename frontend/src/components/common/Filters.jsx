export default function Filters({ similarity, setSimilarity }) {
  return (
    <div className="bg-white/70 rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">Filters</h3>
      <label className="text-gray-700 text-sm">Similarity Score</label>
      <input
        type="range"
        min="0"
        max="100"
        value={similarity}
        onChange={(e) => setSimilarity(Number(e.target.value))}
        className="w-full accent-purple-600"
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>0</span>
        <span>{similarity}</span>
        <span>100</span>
      </div>
    </div>
  );
}
