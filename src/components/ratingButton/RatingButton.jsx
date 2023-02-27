export default function RatingButton({text, active, handleClick, index}) {
  const className = active
    ? "w-12 h-12 bg-[#fb7413] text-white rounded-full cursor-pointer hover:bg-[#959eac]"
    : "w-12 h-12 bg-[#293544] text-white rounded-full cursor-pointer hover:bg-[#959eac]";
  return (
    <button className={className} onClick={() => handleClick(index)}>
      <span className="font-semibold">{text}</span>
    </button>
  );
}
