export default function HylianCrest({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Skyward Sword Bird */}
      <path
        d="M 50 20
           L 30 40
           L 10 70
           L 20 80
           L 35 65
           L 50 80
           L 65 65
           L 80 80
           L 90 70
           L 70 40
           L 50 20
           M 50 20
           L 40 45
           L 50 55
           L 60 45
           L 50 20"
        fill="currentColor"
      />

      {/* Triforce */}
      <path
        d="M 50 85
           L 43 97
           L 57 97
           L 50 85
           M 43 97
           L 36 109
           L 50 109
           L 43 97
           M 57 97
           L 50 109
           L 64 109
           L 57 97"
        fill="currentColor"
      />

      {/* Wing Details - Left */}
      <path
        d="M 35 65
           L 25 75
           L 35 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Wing Details - Right */}
      <path
        d="M 65 65
           L 75 75
           L 65 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Tail Feathers */}
      <path
        d="M 45 80
           L 50 90
           L 55 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
} 