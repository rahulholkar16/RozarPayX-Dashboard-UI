import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';

import Navbar from "./components/Navbar/Navbar";
import TopBar from "./components/Top-bar/top-bar";
import Home from "./Pages/Home/Home";

function App() {
    const [activePath, setActivePath] = useState(null);

    return (
        <div className="h-screen w-screen flex bg-[#080d29]">
            <Navbar setActivePath={setActivePath} />
            <Box className="h-full overflow-y-scroll w-full hide-scrollbar">
                <TopBar activePath={activePath} />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Box>
        </div>
    );
}

export default App;
