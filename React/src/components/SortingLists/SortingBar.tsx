import React from "react";

const SortingMethods = ["title", "author", "points", "num_comments"];

type SortingBarProps = {
  sortType: string;
  onSort: (e: string, reverse: boolean) => void;
};
const SortingBar: React.FC<SortingBarProps> = ({ sortType, onSort }) => {
  const [isRev, setRev] = React.useState(false);
  const handleClick = (t: string) => {
    let __isRev = isRev;
    if (t === sortType) {
      __isRev = !isRev;
    } else {
      __isRev = false;
    }
    onSort(t, __isRev);
    setRev(__isRev);
  };

  return (
    <div className='sorting-bar flex pt-2 pb-2'>
      <span className='inline-block align-middle leading-8'>Sort By:</span>
      {SortingMethods.map((s) => (
        <button
          type='button'
          key={s}
          data-type={s}
          onClick={() => handleClick(s)}
          className={"text-sm p-1 flex-1 border rounded mr-1 " + (sortType === s ? "bg-green-500" : "")}>
          {s}
        </button>
      ))}
    </div>
  );
};
export default React.memo(SortingBar);
