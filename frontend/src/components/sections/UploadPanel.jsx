// import Button from "../common/Button";

// export default function UploadPanel() {
//   return (
//     <section className="p-8 border rounded-xl shadow-md text-center bg-white w-full max-w-xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Upload Your Image</h2>
//       <div className="border-2 border-dashed border-gray-400 p-8 rounded-xl">
//         <p className="mb-4 text-gray-600">Drag & Drop or Click to Upload</p>
//         <Button variant="primary">Choose File</Button>
//       </div>
//     </section>
//   );
// }

// src/components/UploadSection.jsx
export default function UploadSection() {
  return (
    <section className="bg-gray-50 py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Upload Your Image</h2>
      <div className="border-2 border-dashed border-purple-400 rounded-2xl p-10 w-full max-w-xl flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">Drag & Drop or Click to Upload</p>
        <label className="bg-purple-600 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-purple-700 transition">
          Choose File
          <input type="file" className="hidden" />
        </label>
      </div>
    </section>
  );
}
