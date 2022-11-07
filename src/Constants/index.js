import AceOfC from "../Images/AC.png";
import AceOfD from "../Images/AD.png";
import AceOfH from "../Images/AH.png";
import AceOfS from "../Images/AS.png";
import EightOfC from "../Images/8C.png";
import EightOfD from "../Images/8D.png";
import EightOfH from "../Images/8H.png";
import FiveOfC from "../Images/5C.png";
import FiveOfD from "../Images/5D.png";
import FiveOfH from "../Images/5H.png";
import FiveOfS from "../Images/5S.png";
import FourOfC from "../Images/4C.png";
import FourOfD from "../Images/4D.png";
import FourOfH from "../Images/4H.png";
import FourOfS from "../Images/4S.png";
import JackOfC from "../Images/JC.png";
import JackOfD from "../Images/JD.png";
import JackOfH from "../Images/JH.png";
import KingOfC from "../Images/KC.png";
import KingOfD from "../Images/KD.png";
import KingOfH from "../Images/KH.png";
import NineOfC from "../Images/9C.png";
import NineOfD from "../Images/9D.png";
import NineOfH from "../Images/9H.png";
import QueenOfC from "../Images/QC.png";
import QueenOfD from "../Images/QD.png";
import QueenOfH from "../Images/QH.png";
import SevenOfC from "../Images/7C.png";
import SevenOfD from "../Images/7D.png";
import SevenOfH from "../Images/7H.png";
import SixOfC from "../Images/6C.png";
import SixOfD from "../Images/6D.png";
import SixOfH from "../Images/6H.png";
import TenOfC from "../Images/10C.png";
import TenOfD from "../Images/10D.png";
import TenOfH from "../Images/10H.png";
import ThreeOfC from "../Images/3C.png";
import ThreeOfD from "../Images/3D.png";
import ThreeOfH from "../Images/3H.png";
import ThreeOfS from "../Images/3S.png";
import TwoOfC from "../Images/2C.png";
import TwoOfD from "../Images/2D.png";
import TwoOfH from "../Images/2H.png";
import TwoOfS from "../Images/2S.png";

export const IMAGES = [
  {
    name: "AH",
    card: AceOfH,

  },
  {
    name: "2H",
    card: TwoOfH,
  },
  {
    name: "3H",
    card: ThreeOfH,
  },
  {
    name: "4H",
    card: FourOfH,
  },
  {
    name: "5H",
    card: FiveOfH,
  },
  {
    name: "6H",
    card: SixOfH,
  },
  {
    name: "7H",
    card: SevenOfH,
  },
  {
    name: "8H",
    card: EightOfH,
  },
  {
    name: "9H",
    card: NineOfH,
  },
  {
    name: "10H",
    card: TenOfH,
  },
  {
    name: "JH",
    card: JackOfH,
  },
  {
    name: "QH",
    card: QueenOfH,
  },
  {
    name: "KH",
    card: KingOfH,
  },
  {
    name: "AC",
    card: AceOfC,
  },
  {
    name: "2C",
    card: TwoOfC,
  },
  {
    name: "3C",
    card: ThreeOfC,
  },
  {
    name: "4C",
    card: FourOfC,
  },
  {
    name: "5C",
    card: FiveOfC,
  },
  {
    name: "6C",
    card: SixOfC,
  },
  {
    name: "7C",
    card: SevenOfC,
  },
  {
    name: "8C",
    card: EightOfC,
  },
  {
    name: "9C",
    card: NineOfC,
  },
  {
    name: "10C",
    card: TenOfC,
  },
  {
    name: "JC",
    card: JackOfC,
  },
  {
    name: "QC",
    card: QueenOfC,
  },
  {
    name: "KC",
    card: KingOfC,
  },
  {
    name: "AD",
    card: AceOfD,
  },
  {
    name: "2D",
    card: TwoOfD,
  },
  {
    name: "3D",
    card: ThreeOfD,
  },
  {
    name: "4D",
    card: FourOfD,
  },
  {
    name: "5D",
    card: FiveOfD,
  },
  {
    name: "6D",
    card: SixOfD,
  },
  {
    name: "7D",
    card: SevenOfD,
  },
  {
    name: "8D",
    card: EightOfD,
  },
  {
    name: "9D",
    card: NineOfD,
  },
  {
    name: "10D",
    card: TenOfD,
  },
  {
    name: "JD",
    card: JackOfD,
  },
  {
    name: "QD",
    card: QueenOfD,
  },
  {
    name: "KD",
    card: KingOfD,
  },
  {
    name: "AS",
    card: AceOfS,
  },
  {
    name: "2S",
    card: TwoOfS,
  },
  {
    name: "3S",
    card: ThreeOfS,
  },
  {
    name: "4S",
    card: FourOfS,
  },
  {
    name: "5S",
    card: FiveOfS,
  }
];

export const DECK_OF_CARDS = IMAGES.map((card) => card.name);

export const PLAYER = 'player';
export const DEALER = 'dealer';
export const SIDEWAYS_DOUBLE_CARD = 'sideways-double-card';
export const CARD_IMG = 'card-img';