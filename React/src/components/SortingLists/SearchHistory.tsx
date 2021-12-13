import React from "react";

const SearchHistory: React.FC<{ SearchTerms: string[]; onClick: (v: string) => void }> = ({
  SearchTerms,
  onClick,
}) => {
  return (
    <div className='search-history'>
      Search History:
      {SearchTerms.map((st, index) => (
        <button className='text-blue-500 underline pr-1' key={st + index} onClick={() => onClick(st)}>
          {st}
        </button>
      ))}
    </div>
  );
};
export default React.memo(SearchHistory);
