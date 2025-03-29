import Counter from './components/Counter';
import Counter from './components/Counter';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './components/Counter';
function App() {
    return (
        <div>
              <Counter />
              <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Header />
            <MainContent />
            <Footer />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Counter />
        </div>
    );
}
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <WelcomeMessage /> {/* First instance of WelcomeMessage */}
            <div>
            <Counter />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
                <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <WelcomeMessage /> {/* Second instance of WelcomeMessage */}
        </>
    );
}

export default App;
