import { Routes, Route, Link } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Wait from '@/components/Waiting'
import { myRoutes } from './routes'

const Category = () => {
  return (
    <div className="container p-2">
      <h1 className="text-3xl font-thin m-2">List of Modules</h1>
      <div className="flex flex-wrap">
        {myRoutes.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className="text-blue-700 text-xl font-light underline underline-offset-2 flex-1 bg-teal-400 m-2 p-4 rounded-xl"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route path="/" element={<Category />} />
          {myRoutes.map(({ element, ...props }) => (
            <Route
              key={props.name}
              element={<Wait for={element} />}
              {...props}
            />
          ))}
        </Routes>
      </div>
    </RecoilRoot>
  )
}

export default App
