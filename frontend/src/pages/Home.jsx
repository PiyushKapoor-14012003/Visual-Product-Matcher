import Navbar from "../components/common/Navbar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LeftSection from "../components/sections/LeftSection";
import RightSection from "../components/sections/RightSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200">
      <Navbar />
      <Header />
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 w-full max-w-7xl mx-auto gap-12 md:gap-24">
        <LeftSection />
        <RightSection />
      </main>
      <Footer />
    </div>
  );
}
