import React, { useState } from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
    const [isGreen, setIsGreen] = useState(false);

    const handleClick = () => {
        setIsGreen(!isGreen); // Toggle state to switch button styles
    };

    return (
        <div className="App">
            <form className="form-container">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="text-container">
                    <p className="name">Kgabo Kwenaite</p>
                    <p className="address">Seshego - Zone 1</p>
                    <p className="role">"Software developer and Music Producer"</p>
                </div>
                <ul className="button-list">
                    <li>
                        <button
                            className={`color-button ${isGreen ? 'green' : ''}`}
                            onClick={handleClick}
                            type="button"
                        >
                            Github
                        </button>
                    </li>
                    {/* Include other buttons similarly */}
                </ul>
            </form>
        </div>
    );
}

export default App;
