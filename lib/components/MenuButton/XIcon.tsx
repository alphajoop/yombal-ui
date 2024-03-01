export default function XIcon({ size = 24 }: { size?: number }) {
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
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18 18 6m0 12L6 6"
      />
    </svg>
  );
}
