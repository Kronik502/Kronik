import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <form className="form-container">
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="text-container">
                    <p className="name">Kgabo Kwenaite</p>
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
                </ul>
            </form>
        </div>
    );
}

export default App;
