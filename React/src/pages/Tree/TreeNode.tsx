import React from "react";

interface Node<T = any> {
  name: string;
  type: "file" | "folder";
  children?: T[];
}

const Folderer: React.FC<{ open: boolean; children: React.ReactElement[] | React.ReactElement }> =
  React.memo(({ open, children }) => {
    const Cd = React.useMemo(() => children, []);
    return <div className={open ? "pl-4" : "hidden"}>{Cd}</div>;
  });

const Folder: React.FC<{ data: Node }> = ({ data: { name, children = [] } }) => {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const RenderChildren = React.useMemo(() => {
    return (
      <>
        {children.map((cd, i) => {
          if (cd.type === "folder") {
            return <Folder data={cd} key={`${cd.name}_${i}`} />;
          }
          return <File data={cd} key={`${cd.name}_${i}`} />;
        })}
      </>
    );
  }, [children]);
  return (
    <div className='w-max border-l-2'>
      <button
        className='button h-6 w-6 leading-3 text-sm p-0 m-0 box-border outline-none'
        onClick={toggleOpen}>
        {open ? "-" : "+"}
      </button>
      <div className='inline-block'>{name}</div>
      {/* {open ? ( */}
      <Folderer open={open}>{RenderChildren}</Folderer>
      {/* ) : null} */}
    </div>
  );
};

const File: React.FC<{ data: Node }> = ({ data }) => {
  return <div className='text-blue-500'>{data.name}</div>;
};

const RootNode = ({ data }: { data: Node[] }) => {
  return (
    <>
      {data.map((d, i) => {
        if (d.type === "file") {
          return <File data={d} key={`${d.name}_${i}`} />;
        }
        return <Folder data={d} key={`${d.name}_${i}`} />;
      })}
    </>
  );
};

export default RootNode;
