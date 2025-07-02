import React from "react";
import { FaConnectdevelop } from "react-icons/fa";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center text-2xl font-sans tracking-wide text-brand">
      <FaConnectdevelop className="text-white mr-2" size={30} />
      <span className="text-brand mr-1">[</span>
      <span className="text-white">dev</span>
      <span className="text-brand ml-1">]</span>
    </div>
  );
};

export default Logo;
