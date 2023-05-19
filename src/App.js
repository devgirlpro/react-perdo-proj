import "./App.css";

//user component
const UserCompo = (props) => {
    return (
        <div>
            <h2>name: {props.name}</h2>
            <h3>age: {props.age}</h3>
            <h4>email: {props.email}</h4>
        </div>
    );
};

//job component
const Job = (props) => {
    return (
        <div>
            <h2>salary: {props.salary}</h2>
            <h3>position: {props.position}</h3>
            <h4>company: {props.company}</h4>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <h2>React proj pedro</h2>
            <UserCompo name="pedro" age={23} email="pedro@pedro.com" />
            <Job salary={5500} position="senior" company="Amazon" />
            <br />
            <UserCompo name="zi" age={32} email="zi@zi.com" />
            <Job salary={2500} position="junior" company="newName" />
        </div>
    );
}

export default App;
