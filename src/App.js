import "./App.css";
import axios from "axios";

import { useState } from "react";

function App() {
    const [partyExcuse, setPartyExcuse] = useState("");
    const [familyExcuse, setFamilyExcuse] = useState("");
    const [officeExcuse, setOfficeExcuse] = useState("");

    const getExcuse = (excuse) => {
        axios
            .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
            .then((res) => {
                console.log(res.data);
                if (excuse === "party") {
                    setPartyExcuse(res.data[0].excuse);
                } else if (excuse === "family") {
                    setFamilyExcuse(res.data[0].excuse);
                } else if (excuse === "office") {
                    setOfficeExcuse(res.data[0].excuse);
                }
            });
    };

    return (
        <div className="App">
            <button onClick={() => getExcuse("party")}>Party</button>
            <button onClick={() => getExcuse("family")}>Family</button>
            <button onClick={() => getExcuse("office")}>Office</button>

            <div className="prodictedAge ">
                <h2>
                    Party Excuse: <p>{partyExcuse}</p>
                </h2>
                <h2>
                    Family Exccuse: <p>{familyExcuse}</p>
                </h2>
                <h2>
                    Office Excuse: <p>{officeExcuse}</p>
                </h2>
            </div>
        </div>
    );
}

export default App;
