import React from "react";
import { DataItem } from "./types";

type ListProps = {
  data: DataItem[];
};
const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className='list'>
      {data.map((d, index) => {
        return <div key={d.objectID}>{d.title}</div>;
      })}
    </div>
  );
};
export default List;
