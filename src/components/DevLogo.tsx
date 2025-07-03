import React from "react";

interface DevLogoProps {
  className?: string;
}

const DevLogo: React.FC<DevLogoProps> = ({ className }) => {
  return (
    <svg
      className={`w-45 h-20${className ? ` ${className}` : ""}`}
      viewBox="0 0 300 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Developer logo"
    >
      <title>Dev Logo</title>

      {/* Background */}
      <rect width="100%" height="100%" fill="transparent" rx="12" />

      {/* Browser window icon */}
      <g transform="translate(20, 20)">
        <rect
          width="50"
          height="40"
          rx="4"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <rect width="50" height="8" fill="white" rx="2" />
        <text
          x="25"
          y="30"
          fontSize="18"
          fontFamily="monospace"
          fill="white"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          &lt;/&gt;
        </text>
      </g>

      {/* Dev text with glow */}
      <text
        x="90"
        y="50"
        fontSize="28"
        fontFamily="monospace"
        fill="#40CF8F"
        textAnchor="start"
        filter="url(#glow)"
      >
        [dev]
      </text>

      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2"
            floodColor="#40CF8F"
            floodOpacity="0.6"
          />
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="4"
            floodColor="#40CF8F"
            floodOpacity="0.3"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default DevLogo;
