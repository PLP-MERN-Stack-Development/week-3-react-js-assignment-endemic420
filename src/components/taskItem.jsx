function taskItem ({task, deleteTask, toggleComplete}){
    return(
        <li>
            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="h-5 w-5 text-blue-600"
                />
                <span className={`${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                    {task.text}
                </span>
            </div>
            <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700 ml-4">
                Delete
            </button>
        </li>
    );
}

export default taskItem;