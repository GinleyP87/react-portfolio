import React from 'react';
import './App.css';
import Footer from './components/Footer/index';
import RenderedPage from './components/RenderedPage';

function App() {
    return (
        <div className="App">
            <RenderedPage />
        </div>
        <Footer />
    );
}

export default App;