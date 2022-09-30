import React from "react";
import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import NotFound from '../NotFound';


const Main = () => {
  return (
    <main> 
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Books />} path={"/books"} />
        <Route element={<NotFound />} path={"/*"} />
      </Routes>
    </main>

  )
}

export default Main;



