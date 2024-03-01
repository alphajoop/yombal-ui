export default function MenuIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M5 7h14M5 12h14M5 17h10"
      />
    </svg>
  );
}
