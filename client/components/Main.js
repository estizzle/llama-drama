import React from 'react';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
import GameScreen from './GameScreen';
/*
    This is your entry point for your routes
*/
const Main = () => {
    const gameRoutes =
    <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/gamestart/:storypromptId" element={<GameScreen/>}/>
        <Route path="*" element={<Menu/>} />
    </Routes>

    return (
        <div>
           {gameRoutes}
        </div>
    );
};

export default Main;
