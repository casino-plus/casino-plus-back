const Card = {
  As: "As",
  Ah: "Ah",
  Kd: "Kd",
  Kc: "Kc",
  Qs: "Qs",
  Qh: "Qh",
  Qd: "Qd",
  Qc: "Qc",
  Js: "Js",
  Jh: "Jh",
  Jd: "Jd",
  Jc: "Jc",
} as const;
type Card = typeof Card[keyof typeof Card];

const WheelInner = {
  c: "c",
  h: "h",
  z: "z",
  d: "d",
} as const;
type WheelInner = typeof WheelInner[keyof typeof WheelInner];

const WheelOuter = {
  Qd: "Qd",
  Jc: "Jc",
  Ks: "Ks",
  Ah: "Ah",
} as const;
type WheelOuter = typeof WheelOuter[keyof typeof WheelOuter];

const Face = {
  A: "A",
  K: "K",
  Q: "Q",
  J: "J",
} as const;
type Face = typeof Face[keyof typeof Face];

const Mark = {
  s: "s",
  h: "h",
  d: "d",
  c: "c",
  z: "z",
} as const;
type Mark = typeof Mark[keyof typeof Mark];

const Combo = {
  // need 3
  RSF: "RSF",
  SF: "SF",
  FullHouse: "FullHouse",
  Flush: "Flush",
  Straight: "Straight",
  TwoPairs: "TwoPairs",
  // need 2
  KingJoker: "KingJoker",
  FacePair: "FacePair",
  MarkPairMarkPair: "MarkPairMarkPair",
  // need 1
  Joker: "Joker",
  // need 0
  NoPairs: "NoPairs",
} as const;
type Combo = typeof Combo[keyof typeof Combo];

const Step = {
  Bet: "Bet",
  Shuffle: "Shuffle",
  Put: "Put",
  Showdown: "Showdown",
} as const;
type Step = typeof Step[keyof typeof Step];

const BetLevel = {
  Max: "Max",
  Mid: "Mid",
  Min: "Min",
} as const;
type BetLevel = typeof BetLevel[keyof typeof BetLevel];

const Seat = {
  S0: "S0",
  S1: "S1",
  S2: "S2",
  S3: "S3",
} as const;
type Seat = typeof Seat[keyof typeof Seat];

type InnerSpace = {
  seat: Seat;
  wheelInner: WheelInner;
};

type OuterSpace = {
  seat: Seat;
  wheelOuter: WheelOuter;
};

type SideSpace = {
  seat: Seat;
  put?: Card;
  bet?: BetLevel;
  chip: number;
  step: Step;
  cards: [Card];
};

type Board = {
  innerSpaces: InnerSpace[];
  outerSpaces: OuterSpace[];
  sideSpaces: SideSpace[];
};
