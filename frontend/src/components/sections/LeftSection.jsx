import { useState } from "react";
import { UploadCloud as Upload, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LeftSection() {
  const [mode, setMode] = useState("upload");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(URL.createObjectURL(droppedFile));
    }
  };

  return (
    <div className="flex-1 text-center md:text-left">
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-8 mt-8">
        <button
          onClick={() => setMode("upload")}
          className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-10 py-4 rounded-xl shadow transition ${
            mode === "upload"
              ? "bg-purple-600 text-white"
              : "bg-white border text-gray-700 hover:bg-gray-100"
          }`}
        >
          <Upload size={22} /> Upload Image
        </button>
        <button
          onClick={() => setMode("url")}
          className={`w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-10 py-4 rounded-xl shadow transition ${
            mode === "url"
              ? "bg-purple-600 text-white"
              : "bg-white border text-gray-700 hover:bg-gray-100"
          }`}
        >
          <LinkIcon size={22} /> Paste URL
        </button>
      </div>

      <div className="flex items-center gap-4 md:gap-6 mt-8 md:mt-12 text-gray-600 text-sm md:text-lg">
        <span className="h-px w-16 md:w-28 bg-gray-300"></span>
        OR
        <span className="h-px w-16 md:w-28 bg-gray-300"></span>
      </div>

      {mode === "upload" ? (
        <div
          className="border-2 border-dashed border-purple-400 rounded-2xl p-8 md:p-16 mt-8 w-full max-w-md md:max-w-xl bg-white/60 mx-auto md:mx-0 cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {file ? (
            <img
              src={file}
              alt="Preview"
              className="max-h-48 mx-auto rounded-lg shadow"
            />
          ) : (
            <div
              onClick={() => document.getElementById("fileInput").click()}
              className="flex flex-col items-center gap-3 md:gap-4 text-gray-700"
            >
              <Upload className="text-purple-600" size={36} />
              <p className="font-medium text-base md:text-xl">
                Drag & Drop or Click to Upload
              </p>
            </div>
          )}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="mt-8 w-full max-w-md md:max-w-xl mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Paste image URL here..."
            className="w-full px-4 py-3 border rounded-xl shadow bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )}

      <button
        onClick={() => navigate("/results")}
        className="mt-8 md:mt-12 w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-purple-800 text-white text-base md:text-xl font-semibold rounded-xl shadow hover:bg-purple-900 transition"
      >
        Get Started →
      </button>
    </div>
  );
}
