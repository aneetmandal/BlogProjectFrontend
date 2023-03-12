import {BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Article from "./components/article";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
