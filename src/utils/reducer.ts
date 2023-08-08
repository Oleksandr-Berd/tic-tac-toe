interface IState {
  player1: number;
  player2: number;
  ties: number;
}

export type Action =
  | { type: "PLAYER1" }
  | { type: "PLAYER2" }
  | { type: "TIE" }
  | { type: "RESTART" };

export const initialScore: IState = {
  player1: 0,
  player2: 0,
  ties: 0,
};

export const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "PLAYER1":
      return { ...state, player1: state.player1 + 1 };
    case "PLAYER2":
      return { ...state, player2: state.player2 + 1 };
    case "TIE":
          return { ...state, ties: state.ties + 1 };
      case "RESTART":
          return initialScore;
    default:
      return state;
  }
};
