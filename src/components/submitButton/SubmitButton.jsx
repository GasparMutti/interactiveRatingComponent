import {useState} from "react";
import RatingModal from "../ratingModal/RatingModal";

export default function SubmitButton({value}) {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = () => setModalActive(true);
  return (
    <>
      <button
        className="w-full bg-[#fb7413] py-2 mt-2 rounded-full text-white text-lg font-semibold hover:bg-white hover:text-[#fb7413]"
        onClick={handleClick}
        disabled={value ? false : true}
      >
        SUBMIT
      </button>
      <RatingModal
        active={modalActive}
        setActive={setModalActive}
        value={value}
      />
    </>
  );
}
