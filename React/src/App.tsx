import { Routes, Route, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Wait from "@/components/Waiting";
import { myRoutes } from "./routes";

const Category = () => {
  return (
    <div className='container p-2'>
      <h1 className='text-3xl font-thin'>List of Modules</h1>
      {myRoutes.map(({ name, path }) => (
        <Link
          key={name}
          to={path}
          className='text-blue-600 block underline underline-offset-2 pt-1 pb-1'>
          {name}
        </Link>
      ))}
    </div>
  );
};

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Category />} />
          {myRoutes.map(({ element, ...props }) => (
            <Route key={props.name} element={<Wait for={element} />} {...props} />
          ))}
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
