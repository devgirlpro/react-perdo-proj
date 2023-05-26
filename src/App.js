import "./App.css";
import Axios from "axios";
import async from "hbs/lib/async";
import { useState, useEffect } from "react";

function App() {
    const [catFact, setCatFact] = useState("");
    const [catFactList, setCatFactList] = useState([]);

    /*  fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
            console.log("data==>", data);
        }); */

    /*     useEffect(() => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    }, []); */

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    };

    return (
        <div className="App">
            <button onClick={fetchCatFact}>Generate cat fact</button>
            <p>{catFact}</p>
            <div className="catFactList">
              
            </div>
        </div>
    );
}

export default App;
