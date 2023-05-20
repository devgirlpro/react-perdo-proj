import "./App.css";
import { User } from "./User";
import { Job } from "./Jobs";

//user component

//job component

function App() {
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

    return (
        <div className="App">
            <h2 style={{ color: isGreen ? "green" : "pink" }}>
                React proj pedro
            </h2>
            <h2 style={{ color: isBlue ? "blue" : "pink" }}>pink-blue text</h2>

            {/* {planets.map((planet, key) => {
                return planet.isGasPlanet ? (
                    <h2 key={key}>{planet.name}</h2>
                ) : (
                    <h2 key={key}>{planet.name} is not GasPlanet</h2>
                );
            })} */}
            {/* {planets.map((planet, key) => {
                if (planet.isGasPlanet) {
                    return <h1 key={key}>{planet.name}</h1>;
                }
            })} */}

            {planets.map(
                (planet, key) =>
                    planet.isGasPlanet && <h2 key={key}>{planet.name}</h2>
            )}

            <User name="pedro" age={23} email="pedro@pedro.com" />
            <Job salary={5500} position="senior" company="Amazon" />
            <br />
            <User name="zi" age={32} email="zi@zi.com" />
            <Job salary={2500} position="junior" company="newName" />
        </div>
    );
}

export default App;
