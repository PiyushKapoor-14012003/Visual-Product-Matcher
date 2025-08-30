// // src/components/sections/HeroSection.jsx
// import { Camera, ShoppingBag, Cpu, Upload } from "lucide-react";

// const features = [
//   { icon: Camera, title: "Image Search", text: "Find products visually" },
//   { icon: ShoppingBag, title: "E-commerce", text: "Shop similar items" },
//   { icon: Cpu, title: "AI Powered", text: "Smart recognition engine" },
//   { icon: Upload, title: "Upload", text: "Easily upload your files" },
// ];

// export default function HeroSection() {
//   return (
//     <section className="text-center py-16">
//       <h1 className="text-4xl font-bold mb-6">
//         VisualMatch <span className="text-purple-600">AI</span>
//       </h1>
//       <p className="text-gray-600 mb-10">
//         Upload an image and discover visually similar products instantly.
//       </p>

//       {/* Feature Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {features.map(({ icon: Icon, title, text }, idx) => (
//           <div
//             key={idx}
//             className="flex flex-col items-center p-4 bg-white shadow rounded-xl"
//           >
//             <Icon className="w-10 h-10 text-purple-600 mb-3" />
//             <h3 className="font-semibold">{title}</h3>
//             <p className="text-sm text-gray-500">{text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// src/components/HeroSection.jsx
import { Camera, ShoppingBag, UploadCloud, Cpu } from "lucide-react";

const features = [
  { icon: Camera, title: "Image Search", desc: "Find products visually" },
  { icon: ShoppingBag, title: "E-commerce", desc: "Shop similar items" },
  { icon: Cpu, title: "AI Powered", desc: "Smart recognition engine" },
  { icon: UploadCloud, title: "Upload", desc: "Easily upload your files" },
];

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 py-20 text-center">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
        Visual Product Matcher 
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        Upload an image and discover visually similar products instantly.
      </p>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
        {features.map(({ icon: Icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition"
          >
            <Icon size={42} className="text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
