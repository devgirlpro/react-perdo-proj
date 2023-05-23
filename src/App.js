import { useState } from "react";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const task = {
            id:
                todoList.length === 0
                    ? 1
                    : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        };
        setTodoList([...todoList, task]);
        console.log("todoList ==>", todoList);
    };

    const deletTask = (taskId) => {
        const newTodoList = todoList.filter((task) => {
            return task.id !== taskId;
        });
        setTodoList(newTodoList);
    };

    return (
        <div className="App">
            <div className="addTask">
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>Add TAsk</button>
            </div>
            <div className="list">
                {todoList.map((task, key) => {
                    return (
                        <div key={key}>
                            <h2>
                                {task.taskName} <br />
                                <button onClick={() => deletTask(task.id)}>
                                    XXX
                                </button>
                            </h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
