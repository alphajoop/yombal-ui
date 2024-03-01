export default function MoonIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        fill-rule="evenodd"
        d="M11.7 2a10 10 0 1 0 9.8 13.3 1 1 0 0 0-1-1.3H20a8 8 0 0 1-7.6-10.6l.1-.4a1 1 0 0 0-.8-1Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
