import {CHIPS} from '../../Constants/index';
import React from "react";

const ChipImages = ({onClick, chipCount}) => {
  return CHIPS?.map((chip) => {    
    const getCssClass = 'bet-button';
    const shouldBeRendered = chipCount >= chip.chipAmount;
    return shouldBeRendered && <img className={getCssClass} alt={chip.name} src={chip.src} key={`image-name-${chip.name}`} onClick={onClick}/>;
  });
};

export default ChipImages;
