import { useState } from "react";

import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
  // task list goes here!
  const [state, setState] = useState([
    {
      id: 1,
      task: "انجام پروژه پیام پرداز",
      deadline: "25 اسفند",
    },
    {
      id: 2,
      task: "تکلیف نهفته بیدرنگ",
      deadline: "25 اسفند",
    },
    {
      id: 3,
      task: "گرفتن مدارک ",
      deadline: "22 اسفند",
    },
  ]);

  // ****** EVENTS
  // AddTask
  function addTask(task) {
    let id = Math.floor(Math.random() * 10000);
    setState([...state, { id, ...task }]);
    console.log(task);
    console.log(state);
  }
  // DeleteTask
  function deleteTask(id) {
    setState(state.filter((task) => task.id !== id));
  }
  // showForm

  return (
    <div className="container">
      <Header />
      {/* import Form to create task */}
      <Form onAddTask={addTask} />
      {/* import tasks to dom */}
      <Tasks tasks={state} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
