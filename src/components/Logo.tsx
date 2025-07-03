import React from "react";
import LogoSVG from "../components/DevLogo"; // Adjust the path if necessary
// Adjust the path if necessary
const Logo: React.FC = () => (
  <div className="flex flex-row gap-3 justify-center items-center text-2xl font-sans tracking-wide text-brand gap-2">
    <span className="logo-title">
      <LogoSVG className="w-16 h-16" />
      {/* <span className="hover:animate-pulse text-brand font-bold text-2xl">
        [
      </span>
      dev
      <span className="hover:animate-pulse text-brand font-bold text-2xl">
        ]
      </span> */}
    </span>
  </div>
);

export default Logo;
