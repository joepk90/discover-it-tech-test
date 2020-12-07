import React from 'react';
import CafeList from 'src/components/cafeList/cafeList';
import NavBar from 'src/components/navBar/navBar';

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <main className="container">
                <CafeList />
            </main>
        </div>
    );
}

export default App;
