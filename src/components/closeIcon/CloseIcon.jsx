export default function CloseIcon() {
  return (
    <div className="w-fit h-full bg-[#293544] rounded-full p-2 cursor-pointer hover:bg-[#323d4a]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 text-[#fb7413]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
