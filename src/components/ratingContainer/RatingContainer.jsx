import {useState} from "react";
import ButtonsContainer from "../buttonsContainer/ButtonsContainer";
import StarIcon from "../starIcon/StarIcon";
import SubmitButton from "../submitButton/SubmitButton";

export default function RatingContainer() {
  const [value, setValue] = useState(undefined);
  return (
    <div className="relative min-w-max bg-[#252d37] p-10 mx-5 rounded-3xl flex flex-col gap-5">
      <StarIcon />
      <h1 className="text-white text-2xl font-semibold">How did we do?</h1>
      <p className="text-gray-400 max-w-xs">
        Please let us know how we did your support request. All feedback is
        appreciated to help us improve our offering
      </p>
      <ButtonsContainer setValue={setValue} />
      <SubmitButton value={value} />
    </div>
  );
}
