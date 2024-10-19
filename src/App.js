<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 54ab5c113659963ea9e7f8e57d7d3a2f34016bbe
import logo from './logo.jpg';
import './App.css';

function App() {
<<<<<<< HEAD
=======
    const [isGreen, setIsGreen] = useState(false);

    const handleClick = () => {
        setIsGreen(!isGreen); // Toggle state to switch button styles
    };

>>>>>>> 54ab5c113659963ea9e7f8e57d7d3a2f34016bbe
    return (
        <div className="App">
            <form className="form-container">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="text-container">
                    <p className="name">Kgabo Kwenaite</p>
<<<<<<< HEAD
                    <p className="address">TEMBISA - Winnie Mandela - 1632</p>
                    <p className="role">"Software developer, Writer, Gamer and Music Producer"</p>
                </div>
                <ul className="button-list">
                    <li>
                        <a
                            className="color-button"
                            href="https://github.com/Kronik502"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            className="color-button"
                            href="https://www.instagram.com/kronik50two"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a
                            className="color-button"
                            href="https://www.facebook.com/kgabo.kwenaite.35"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            className="color-button"
                            href="https://wa.me/2663275611"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    </li>
                    <li>
                        <a
                            className="color-button"
                            href="https://www.linkedin.com/in/kgabo-kwenaite-567244223"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
=======
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
>>>>>>> 54ab5c113659963ea9e7f8e57d7d3a2f34016bbe
                </ul>
            </form>
        </div>
    );
}

export default App;
