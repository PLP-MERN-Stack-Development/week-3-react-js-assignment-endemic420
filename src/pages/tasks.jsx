import { useState } from 'react';

function Tasks(){
    const [tasks, setTasks] = useState([]);

    const addTask = (task)=>{
        if(task.text.trim()){
            setTasks([...tasks, {id: Date.now(), text: task.text, completed: false},
            ]);
        }
    };

    const deleteTask= (id)=>{
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete=(id)=>{
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
    };

    return(
        <div className="w-full max-w-md mx-auto bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                My Tasks
            </h1>
            <taskForm addTask={addTask} />
            <taskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        </div>
    )
}

export default Tasks;