import React, { MouseEventHandler } from "react";

const WinCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
type ItemType = "O" | "X" | "";
type StateType = {
  BoardData: ItemType[];
  Active: ItemType;
  Winer: ItemType;
  Remains: number;
};
const BoardReducer = (
  state: StateType,
  action: { type: string; data: Partial<StateType> }
): StateType => {
  switch (action.type) {
    case "UPDATE_BOARD":
      if (!action.data) {
        return state;
      }
      return { ...state, BoardData: action.data.BoardData! };
    case "SWITCH_ACTIVE":
      return { ...state, Active: action.data.Active! };
    case "UPDATE_REMAINS":
      return { ...state, Remains: action.data.Remains! };
    case "UPDATE_WINER":
      return { ...state, Winer: action.data.Winer! };
    default:
      return state;
  }
};
const initState: StateType = {
  BoardData: Array(9).fill(""),
  Active: "",
  Winer: "",
  Remains: 9,
};

const TTT: React.FC<{ active: ItemType }> = ({ active = "O" }) => {
  const [state, dispatch] = React.useReducer(BoardReducer, initState);
  const isMount = React.useRef(false);
  const CheckIfWin = () => {
    if (!isMount.current) return;
    for (let i = 0; i < WinCases.length; i++) {
      const cond: number[] = WinCases[i];
      if (
        state.BoardData[cond[0]] !== "" &&
        state.BoardData[cond[0]] === state.BoardData[cond[1]] &&
        state.BoardData[cond[0]] === state.BoardData[cond[2]]
      ) {
        dispatch({
          type: "UPDATE_WINER",
          data: { Winer: state.Active },
        });
        alert("User: " + state.Active + " Win!");
        return;
      }
    }
    if (state.Remains === 0 && !state.Winer) {
      alert("Draw!");
    }
  };
  React.useEffect(() => {
    isMount.current = true;
    active &&
      dispatch({
        type: "SWITCH_ACTIVE",
        data: { Active: active },
      });
  }, []);
  React.useEffect(() => {
    CheckIfWin();
  }, [state.BoardData]);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const i = Number(e.currentTarget.dataset["index"]);
    if (!state.BoardData[i]) {
      let newBoardData = [...state.BoardData];
      newBoardData[i] = state.Active;
      dispatch({
        type: "UPDATE_BOARD",
        data: { BoardData: newBoardData },
      });
      dispatch({
        type: "SWITCH_ACTIVE",
        data: { Active: state.Active === "O" ? "X" : "O" },
      });
      dispatch({
        type: "UPDATE_REMAINS",
        data: { Remains: state.Remains - 1 },
      });
    }
  };
  return (
    <div className='container p-5'>
      <div className='text-bold text-xl'>Current Active User: {state.Active}</div>
      <div className='grid grid-cols-3 grid-rows-3 gap-x-1 gap-y-1 justify-between box-border'>
        {state.BoardData?.map((_, i) => (
          <button
            key={i}
            data-index={i.toString()}
            onClick={handleClick}
            className='h-[100px] w-[100px] bg-gray-400 m-0 p-0 text-4xl border-2 border-gray-900'
            disabled={!!_ || !!state.Winer}>
            {_}
          </button>
        ))}
      </div>
    </div>
  );
};
export default TTT;
