import "./App.css";
import axios from "axios";
import Axios from "axios";
import async from "hbs/lib/async";
import { useState, useEffect } from "react";

function App() {
    const [inputName, setInputName] = useState("");
    const [predictedInfo, setPredictedInfo] = useState({});

    const fetchData = () => {
        axios.get(`https://api.agify.io/?name=${inputName}`).then((res) => {
            console.log(res.data);
            setPredictedInfo(res.data);
        });
    };

    return (
        <div className="App">
            <input
                placeholder="enter a name ..."
                onChange={(e) => {
                    setInputName(e.target.value);
                }}
            />
            <button onClick={fetchData}>Predict Age</button>
            <div className="prodictedAge ">
                <h2>input Name: {predictedInfo?.name}</h2>
                <h3>Predicted age: {predictedInfo?.age}</h3>
                <h4>count: {predictedInfo?.count}</h4>
            </div>
        </div>
    );
}

export default App;
