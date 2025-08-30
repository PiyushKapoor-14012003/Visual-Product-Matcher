// import HeroSection from "../components/sections/HeroSection";
// import UploadPanel from "../components/sections/UploadPanel";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <HeroSection />
//       {/* Upload Panel */}
//       <div className="w-full max-w-3xl mt-10 px-4">
//         <UploadPanel />
//       </div>
//     </div>
//   );
// }

// src/pages/HomePage.jsx
import HeroSection from "../components/sections/HeroSection";
import UploadSection from "../components/sections/UploadPanel";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <UploadSection />
    </main>
  );
}

