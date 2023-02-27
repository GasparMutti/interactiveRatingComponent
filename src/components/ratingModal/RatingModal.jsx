import CloseIcon from "../closeIcon/CloseIcon";
import ThanksSvg from "../thanksSvg/ThanksSvg";

export default function RatingModal({active, setActive, value}) {
  const className = active
    ? "absolute top-0 left-0 h-full w-full bg-[#252d37] p-5 rounded-3xl flex flex-col items-center gap-5"
    : "hidden absolute top-0 left-0 h-full w-full bg-[#252d37] p-5 rounded-3xl flex flex-col items-center gap-5";
  return (
    <div className={className}>
      <div className="w-full flex justify-end" onClick={() => setActive(false)}>
        <CloseIcon />
      </div>
      <ThanksSvg />
      <span className="bg-[#293544] py-2 px-5 rounded-full text-[#fb7413]">
        You selected {value} out of 5
      </span>
      <h2 className="text-white text-3xl">Thank you!</h2>
      <p className="text-gray-400 text-center">
        We appreciated you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch
      </p>
    </div>
  );
}
