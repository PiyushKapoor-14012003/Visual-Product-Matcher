export default function UploadedImageCard({ image }) {
  return (
    <div className="bg-white/70 rounded-xl shadow p-4">
      <h3 className="font-semibold mb-3">Uploaded Image</h3>
      <img
        src={image || "https://via.placeholder.com/250/DEB887"}
        alt="Uploaded"
        className="rounded-lg w-full object-contain"
      />
    </div>
  );
}
