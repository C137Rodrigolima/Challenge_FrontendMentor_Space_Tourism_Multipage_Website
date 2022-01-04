import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Destination from './Components/Destination';
import Crew from './Components/Crew';
import Tecnology from './Components/Tecnology';

function App() {
    return (
    <>
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Destination" element={<Destination/>}></Route>
            <Route path="/Crew" element={<Crew/>}></Route>
            <Route path="/Tecnology" element={<Tecnology/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;