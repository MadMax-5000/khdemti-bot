export function Logo({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        fill="#6366f1"
        fillOpacity="0.2"
        stroke="#6366f1"
        strokeWidth="2"
      />
      <path
        d="M12 6L18 12L12 18L6 12L12 6Z"
        fill="#6366f1"
      />
    </svg>
  );
}
