import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const completetask = (taskId) => {
      setTodoList(
        todoList.map((task) => {
          if (task.id === taskId) {
            return {...task, completed: true}
          } else {
            return task
          }
        })
      )
    };
    
    const addTask = () => {
        const task = {
            id:
                todoList.length === 0
                    ? 1
                    : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        setTodoList([...todoList, task]);
        console.log("todoList ==>", todoList);
    };

    const deleteTask = (taskId) => {
        const newTodoList = todoList.filter((task) => {
            return task.id !== taskId;
        });
        setTodoList(newTodoList);
        // setTodoList(todoList.filter((task) => task.id !== taskId));
    };

    return (
        <div className="App">
            <div className="addTask">
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>Add TAsk</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return (
                        <Task
                            taskName={task.taskName}
                            id={task.id}
                            deleteTask={deleteTask}
                            completed={task.completed}
                            completetask={completetask}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
