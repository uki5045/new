import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Login, Mypage, Signup, Notfound } from "./screens";

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/mypage'} element={<Mypage />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'*'} element={<Notfound />} />
          </Routes>
        </BrowserRouter>
    );
};

export default App;