import Task from "./Task.jsx";

function Tasks({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} deleteTask={deleteTask} />)
      ) : (
        <p className="muted-text">هنوز وظیفه ای ثبت نشده</p>
      )}
    </div>
  );
}

export default Tasks;
