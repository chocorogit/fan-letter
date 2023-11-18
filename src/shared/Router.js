import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import letters from "../fakeData.json";
import { useState } from "react";

const Router = () => {
    const [lettersList, setLettersList] = useState(letters);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home lettersList={lettersList} setLettersList={setLettersList} />} />
                <Route path="detail/:id" element={<Detail lettersList={lettersList} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
