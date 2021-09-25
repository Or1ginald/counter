import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterMenu} from "./components/CounterMenu/CounterMenu";


function App() {
    return (
        <div className="App">
            <div className={"wrapper"}>
                <CounterMenu/>
                <Counter/>
            </div>
        </div>
    );
}

export default App;
