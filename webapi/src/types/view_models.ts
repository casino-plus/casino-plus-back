//
//
//

type GameViewModel = {
  player_view_models: PlayerViewModel[];
  board_view_model: BoardViewModel;
  dockViewModels: DockViewModel;
};

type PlayerViewModel = {
  seat: number;
  player_id: string;
  nickname: string;
  icon_url: string;
  step: string;
  bet?: string;
  chip: number;
};

type BoardViewModel = {
  put_box_view_models: PutBoxViewModel[];
  inner_degree: number;
  outer_degree: number;
};

type PutBoxViewModel = {
  seat: number;
  has_put_card: boolean;
};

type DockViewModel = {
  cards: String[];
};

type ShowdownAnimationModel = {
  seat: number;
  put_card: string;
  old_inner_degree: number;
  new_inner_degree?: number;
  old_outer_degree?: number;
  new_outer_degree?: number;
};

type ScoreViewModel = {
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

type ScoreListViewModel = {
  score_view_models: ScoreViewModel[];
};

type Announce = {
  announce_type: string;
  trigger_seat?: number;
  showdown_list?: ShowdownAnimationModel[];
  score_list?: ScoreViewModel[];
  new_player?: PlayerViewModel;
};
