
import { Cpu } from "lucide-react";

export default function RightSection() {
  return (
    <div className="flex-1 relative flex items-center justify-center min-h-[300px] md:min-h-[500px] mt-10 md:mt-0">

      <div className="absolute -top-6 right-6 md:right-16 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg">
        <Cpu className="text-purple-500" size={56} strokeWidth={2.5} />
      </div>

      <img
        src="../src/assets/icons/camera.png"
        alt="Camera"
        className="absolute bottom-0 right-0 w-40 sm:w-52 md:w-72 h-auto z-10"
      />
    </div>
  );
}
