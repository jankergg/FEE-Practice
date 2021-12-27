import React from "react";
import "@/styles/page.css";
import RootNode from "./TreeNode";
import TreeList from "@/data/mock-folders.json";

const TreePage = () => {
  return (
    <div className='page'>
      <RootNode data={TreeList as any} />
    </div>
  );
};
export default TreePage;
