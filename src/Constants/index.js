import AceOfC from "../images/AC.png";
import AceOfD from "../images/AD.png";
import AceOfH from "../images/AH.png";
import AceOfS from "../images/AS.png";
import EightOfC from "../images/8C.png";
import EightOfD from "../images/8D.png";
import EightOfH from "../images/8H.png";
import FiftyThousand from "../images/50k-chip.png";
import Five from "../images/5-chip.png";
import FiveHundred from "../images/500-chip.png";
import FiveOfC from "../images/5C.png";
import FiveOfD from "../images/5D.png";
import FiveOfH from "../images/5H.png";
import FiveOfS from "../images/5S.png";
import FourOfC from "../images/4C.png";
import FourOfD from "../images/4D.png";
import FourOfH from "../images/4H.png";
import FourOfS from "../images/4S.png";
import JackOfC from "../images/JC.png";
import JackOfD from "../images/JD.png";
import JackOfH from "../images/JH.png";
import KingOfC from "../images/KC.png";
import KingOfD from "../images/KD.png";
import KingOfH from "../images/KH.png";
import NineOfC from "../images/9C.png";
import NineOfD from "../images/9D.png";
import NineOfH from "../images/9H.png";
import OneHundred from "../images/100-chip.png";
import OneHundredK from "../images/100k-chip.png";
import OneMillion from "../images/1m-chip.png";
import OneThousand from "../images/1000-chip.png";
import QueenOfC from "../images/QC.png";
import QueenOfD from "../images/QD.png";
import QueenOfH from "../images/QH.png";
import SevenOfC from "../images/7C.png";
import SevenOfD from "../images/7D.png";
import SevenOfH from "../images/7H.png";
import SixOfC from "../images/6C.png";
import SixOfD from "../images/6D.png";
import SixOfH from "../images/6H.png";
import TenOfC from "../images/10C.png";
import TenOfD from "../images/10D.png";
import TenOfH from "../images/10H.png";
import TenThousand from "../images/10k-chip.png";
import ThreeOfC from "../images/3C.png";
import ThreeOfD from "../images/3D.png";
import ThreeOfH from "../images/3H.png";
import ThreeOfS from "../images/3S.png";
import TwentyFive from "../images/25-chip.png";
import TwoOfC from "../images/2C.png";
import TwoOfD from "../images/2D.png";
import TwoOfH from "../images/2H.png";
import TwoOfS from "../images/2S.png";

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

export const CHIPS = [
  {
    name: "Five",
    src: Five,
    value: 5,
  },
  {
    name: "TwentyFive",
    src: TwentyFive,
    chipAmount: 25,
  },
  {
    name: "OneHundred",
    src: OneHundred,
    chipAmount: 100,
  },
  {
    name: "FiveHundred",
    src: FiveHundred,
    chipAmount: 500,
  },
  {
    name: "OneThousand",
    src: OneThousand,
    chipAmount: 1000,
  },
  {
    name: "TenThousand",
    src: TenThousand,
    chipAmount: 10000,
  },
  {
    name: "FiftyThousand",
    src: FiftyThousand,
    chipAmount: 50000,
  },
  {
    name: "OneHundredK",
    src: OneHundredK,
    chipAmount: 100000,
  },
  {
    name: "OneMillion",
    src: OneMillion,
    chipAmount: 1000000,
  }
];

export const CARD_BACK_ALT = 'card back';
