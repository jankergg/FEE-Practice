import React, { MouseEvent } from "react";

export type ListProps = {
  data: ListItemProps[];
};
export type ListItemProps = {
  id: number;
  name: string;
  age: number;
  company: string;
};
export const List: React.FC<ListProps> = ({ data }) => {
  const handleClick = React.useCallback((e: MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
    let item = JSON.parse(e.currentTarget.dataset["item"]!) as unknown as ListItemProps;
    console.log("click:", item);
  }, []);
  return (
    <div className='list'>
      {data.map((d, i) => (
        <ListItemWithMemo {...d} key={d.id + "_" + i} onClick={handleClick} />
      ))}
    </div>
  );
};

const ListItem: React.FC<ListItemProps & { onClick?: (e: MouseEvent<HTMLDivElement>) => void }> = (
  props
) => {
  const { name, age, company, onClick } = props;
  console.log("rerender:", name);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  };
  return (
    <div className='list-item' onClick={handleClick} data-item={JSON.stringify(props)}>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>company: {company}</div>
    </div>
  );
};
const ListItemWithMemo = React.memo(ListItem);

export default React.memo(List);
