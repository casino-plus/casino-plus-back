import express from "express";
const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CROS を許可する。本番では制限する。
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  }
);
app.listen(3000, () => {
  console.log("Start on port 3000.");
});

/*** モデル ***/
type CodableBoard = {
  inners: CodableInner[];
  outers: CodableOuter[];
  sides: CodableSide[];
};

type CodableInner = {
  seat: number;
  mark: string;
};

type CodableOuter = {
  seat: number;
  mark: string;
  face: string;
};

type CodableSide = {
  seat: number;
  step: string;
  bet?: string;
  has_put_card: boolean;
  chip: number;
  cards: string[];
};

type CodablePlayer = {
  seat: number;
  player_id: string;
  nickname: string;
  icon_url: string;
};

type CodableRoom = {
  players: CodablePlayer[];
  board: CodableBoard;
  inner_degree: number;
  outer_degree: number;
};

type CodableAnnounce = {
  announce_id: string;
  trigger_seat?: number;
  showdown_list?: CodableShowdownAnimation[];
  score_list?: CodableScore[];
  bet_result_list?: CodableBetResult[];
  new_player?: CodablePlayer;
};

type CodableBetResult = {
  seat: number;
  player_id: String;
  bet_level: String;
  new_total_chip: number;
  // FIXME: - 他の人のカードは隠す
  new_cards: string[];
};

type CodableShowdownAnimation = {
  seat: number;
  put_card: string;
  old_inner_degree: number;
  new_inner_degree?: number;
  old_outer_degree: number;
  new_outer_degree?: number;
};

type CodableScore = {
  seat: number;
  player_id: string;
  nickname: string;
  old_total_chip: number;
  bonus_chip: number;
  new_total_chip: number;
  put_card: string;
  inner: string;
  outer: string;
  combo_name: string;
};

type RemenberPlayerIDRequest = {
  user_id: string;
};
type RemenberPlayerIDResponse = {
  player_id: string;
  event_player_id: string;
};

type JoinRoomRequest = {
  user_id: string;
};
type JoinRoomResponse = {
  player_id: string;
};

type PutActionRequest = {
  player_id: string;
  put: string;
};
type PutActionResponse = {
  room: CodableRoom;
};

type BetActionRequest = {
  player_id: string;
  bet: string;
};
type BetActionResponse = {};

type SCanRoomRequest = {
  player_id: string;
  bet: string;
};
type ScanRoomResponse = {};

/*** スタブ ***/
const rememberPlayerIDResponse: RemenberPlayerIDResponse = {
  player_id: "R0000S0",
  event_player_id: "NoEntry",
};
const joinRoomResponse: JoinRoomResponse = { player_id: "R0000S0" };
const players: CodablePlayer[] = [
  { seat: 0, player_id: "R0000S0", nickname: "Do", icon_url: "NoURL" },
  { seat: 1, player_id: "R0000S1", nickname: "Re", icon_url: "NoURL" },
  { seat: 2, player_id: "R0000S2", nickname: "Mi", icon_url: "NoURL" },
  { seat: 3, player_id: "R0000S3", nickname: "Fa", icon_url: "NoURL" },
];
const inners: CodableInner[] = [
  { seat: 0, mark: "c" },
  { seat: 1, mark: "h" },
  { seat: 2, mark: "z" },
  { seat: 3, mark: "d" },
];
const outers: CodableOuter[] = [
  { seat: 0, mark: "d", face: "Q" },
  { seat: 1, mark: "c", face: "J" },
  { seat: 2, mark: "s", face: "K" },
  { seat: 3, mark: "h", face: "A" },
];
const sides: CodableSide[] = [
  { seat: 0, step: "bet", has_put_card: false, chip: 40, cards: [] },
  { seat: 1, step: "bet", has_put_card: false, chip: 40, cards: [] },
  { seat: 2, step: "bet", has_put_card: false, chip: 40, cards: [] },
  { seat: 3, step: "bet", has_put_card: false, chip: 40, cards: [] },
];
const board: CodableBoard = { inners: inners, outers: outers, sides: sides };
const room: CodableRoom = {
  players: players,
  board: board,
  inner_degree: 90,
  outer_degree: 180,
};
const putActionResponse: PutActionResponse = { room: room };
const betActionResponse: BetActionResponse = {};
const scanRoomResponse: ScanRoomResponse = {};

app.get("/", (req: express.Request, res: express.Response) => {
  res.json("Hello");
});
app.get(
  "/api/roulette-poker/remenber-player-id",
  (req: express.Request, res: express.Response) => {
    res.json(rememberPlayerIDResponse);
  }
);
app.get(
  "/api/roulette-poker/join-room",
  (req: express.Request, res: express.Response) => {
    res.json(joinRoomResponse);
  }
);
app.get(
  "/api/roulette-poker/put-action",
  (req: express.Request, res: express.Response) => {
    res.json(putActionResponse);
  }
);
app.get(
  "/api/roulette-poker/bet-action",
  (req: express.Request, res: express.Response) => {
    res.json(betActionResponse);
  }
);
app.get(
  "/api/roulette-poker/scan-room",
  (req: express.Request, res: express.Response) => {
    res.json(scanRoomResponse);
  }
);
