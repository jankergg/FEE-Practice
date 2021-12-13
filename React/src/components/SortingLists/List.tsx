import React from "react";
import { DataItem } from "../types";

type ListProps = {
  data: DataItem[];
};
const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className='list'>
      {data.map((d, index) => {
        return (
          <div className='list-item' key={d.objectID}>
            <div>
              <strong>title: </strong>
              {d.title}
            </div>
            <div>
              <strong>author:</strong>
              {d.author}
            </div>
            <div>
              <strong>points:</strong>
              {d.points}
            </div>
            <div>
              <strong>comments:</strong> {d.num_comments}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default List;
