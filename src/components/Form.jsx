import { useState } from "react";

function Form({ onAddTask }) {
  // create state
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  // *notice: we create state here and than pass the one object to parent

  function acceptTask(e) {
    e.preventDefault();
    // prevent blank fill
    if (!task || !deadline) {
      alert("please fill the blanks!");
      return;
    }
    // create task
    // call onAddTask props
    onAddTask({ task, deadline });

    // clear Inputs
    setTask("");
    setDeadline("");
  }

  return (
    <form onSubmit={acceptTask}>
      <div className="form-control">
        <label htmlFor="inputText">وظیفه</label>
        <input
          type="text"
          id="inputText"
          value={task}
          placeholder="شرحی از کار را وارد کنید"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="inputDeadline">تاریخ پایان</label>
        <input
          type="date"
          id="inputDeadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block add-form">
        تایید
      </button>
    </form>
  );
}

export default Form;
