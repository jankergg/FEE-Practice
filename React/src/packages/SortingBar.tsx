import React from "react";

const SortingMethods = ["title", "author", "points", "num_comments"];

type SortingBarProps = {
  sortType: string;
  onSort: (e: string, reverse: boolean) => void;
};
const SortingBar: React.FC<SortingBarProps> = ({ sortType, onSort }) => {
  const [currentType, setCurrentType] = React.useState(sortType);
  const [isRev, setRev] = React.useState(false);
  const handleClick = (t: string) => {
    let __isRev = isRev;
    if (t === currentType) {
      __isRev = !isRev;
    } else {
      __isRev = false;
      setCurrentType(t);
    }
    onSort(t, __isRev);
    setRev(__isRev);
  };

  return (
    <div className='sorting-bar'>
      <span className='sorting-caption'>Sort By:</span>
      {SortingMethods.map((s) => (
        <button
          type='button'
          key={s}
          data-type={s}
          onClick={() => handleClick(s)}
          className={sortType === s ? "sorting-btn selected" : "sorting-btn"}>
          {s}
        </button>
      ))}
    </div>
  );
};
export default SortingBar;
