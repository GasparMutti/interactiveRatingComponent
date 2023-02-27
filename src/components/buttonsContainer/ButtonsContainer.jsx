import {useState} from "react";
import RatingButton from "../ratingButton/RatingButton";

export default function ButtonsContainer({setValue}) {
  const listButtons = [
    {text: "1", active: false},
    {text: "2", active: false},
    {text: "3", active: false},
    {text: "4", active: false},
    {text: "5", active: false},
  ];
  const [list, setList] = useState(listButtons);
  const handleClick = (index) => {
    const newList = list.map((item) => {
      if (item.text === index) {
        item.active = true;
        setValue(index);
      } else {
        item.active = false;
      }
      return item;
    });
    setList(newList);
  };

  return (
    <div className="w-full flex justify-center flex-wrap gap-5">
      {list.map((button, i) => (
        <RatingButton
          text={button.text}
          active={button.active}
          handleClick={handleClick}
          index={button.text}
          key={i}
        />
      ))}
    </div>
  );
}
