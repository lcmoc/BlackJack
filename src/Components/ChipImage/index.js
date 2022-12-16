import React from "react";

const ChipImage = ({ chipCount, chip, onClick }) => {
  const getCssClass = "bet-button";
  const shouldBeRendered = chipCount >= chip?.chipAmount;

  return (
    shouldBeRendered && (
      <img
        className={getCssClass}
        alt={chip.name}
        src={chip.src}
        key={`image-name-${chip.name}`}
        onClick={onClick}
      />
    )
  );
};

export default ChipImage;
