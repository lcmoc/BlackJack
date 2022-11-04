import { IMAGES } from '../Constants/index'

export const getImage = (card) => {
    return IMAGES.includes(card) ? IMAGES[card] : "";
};
