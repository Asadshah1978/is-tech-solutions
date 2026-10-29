export default function Logo({ className = "w-10 h-10" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Background Hexagon / Tech Shape */}
      <path 
        d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" 
        fill="#0A192F" 
        stroke="#00E5FF" 
        strokeWidth="4" 
        strokeLinejoin="round"
      />
      
      {/* Inner Neon Glow Line */}
      <path 
        d="M50 15 L80 30 L80 70 L50 85 L20 70 L20 30 Z" 
        stroke="#00E5FF" 
        strokeOpacity="0.3" 
        strokeWidth="2" 
        strokeLinejoin="round"
      />

      {/* Letter 'I' */}
      <rect x="33" y="32" width="8" height="36" rx="2" fill="#00E5FF" />
      
      {/* Letter 'S' - Stylized Tech Path */}
      <path 
        d="M72 38 C72 33 67 30 60 30 L52 30 C45 30 42 34 42 38 C42 42 45 44 50 45 L62 48 C67 49 70 52 70 57 C70 62 66 66 58 66 L48 66 C41 66 37 63 36 58" 
        stroke="#00E5FF" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}