import { AiFillCloseCircle } from "react-icons/ai";

function Task({ task, deleteTask }) {
  return (
    <div className="task">
      <h3>
        {task.task}
        <AiFillCloseCircle style={{ color: "red", fontSize: "20px", cursor: "pointer" }} onClick={()=>deleteTask(task.id)} />
      </h3>
      <p >{task.deadline}</p>
    </div>
  );
}

export default Task;
