import { useState } from 'react';

import Banner from './Components/Banner';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Footer from './Components/Footer';

import './App.css';

function App() {
    return (
        <>
            <Banner />
            <Section1 />
            <Section2 />
            <Footer />
        </>
    );
}

export default App;
