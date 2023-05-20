import "./App.css";
import { User } from "./User";
import { Job } from "./Jobs";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);
    const [showPlanets, setShowPlanets] = useState(true);
    const [planetsColor, setPlanetsColor] = useState("blue");

    let isGreen = false;
    let isBlue = true;
    const planets = [
        { name: "Marse", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
    ];

    const IncreaseAge = () => {
        setCount(count + 1);
    };

    const DecreaseAge = () => {
        setCount(count - 1);
    };

    const setToZero = () => {
      setCount(0)
    }

    const ToggleText = () => {
        setShowText(!showText);
    };

    const TogglePlanets = () => {
        setShowPlanets(!showPlanets);
    };

    const TooglePlanetColor = () => {
        setPlanetsColor(planetsColor === "blue" ? "red" : "blue");
    };

    return (
        <div className="App">
            <button onClick={ToggleText}>Show/Hide text</button>
            {showText && (
                <>
                    <h2 style={{ color: isGreen ? "green" : "pink" }}>
                        React proj pedro
                    </h2>
                    <h2 style={{ color: isBlue ? "blue" : "pink" }}>
                        pink-blue text
                    </h2>
                </>
            )}
            <h2>{count}</h2>
            <button onClick={IncreaseAge}>Increase age</button>
            <button onClick={DecreaseAge}>Decrease Age</button>
            <button onClick={setToZero} >set to zero</button>
            <br />
            <hr />
            <button onClick={TogglePlanets}>show/Hide gasPlanets</button>
            {showPlanets &&
                planets.map(
                    (planet, key) =>
                        planet.isGasPlanet && (
                            <>
                                <h2 key={key} style={{ color: planetsColor }}>
                                    {planet.name}
                                </h2>
                            </>
                        )
                )}{" "}
            <button onClick={TooglePlanetColor}>change planetscolor</button>
            <User name="pedro" age={23} email="pedro@pedro.com" />
            <Job salary={5500} position="senior" company="Amazon" />
            <br />
            <User name="zi" age={32} email="zi@zi.com" />
            <Job salary={2500} position="junior" company="newName" />
        </div>
    );
}

export default App;
