import {useState} from 'react';

function TaskForm({addTask}) {
    const [task, setTask] = useState({text: '', completed: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask({text: '', completed: false});
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2 flex-gap-2">
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) => setTask({...task, text: e.target.value})}
                    className="border border-gray-300 p-2 w-full"
                placeholder="Add a new task"
                />
                <button type="submit" className="bg-blue-200 text-white p-2 mt-2 w-full rounded-lg hover:bg-blue-600 transition">
                    Add Task
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
