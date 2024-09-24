import React from 'react';
import { Router,Routes,Route } from 'react-router-dom';
import index from './index.html';

const App = () => {
    return (
        <div>
        <Router>
            <Routes>
                <Route path="/" element={<index />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;