import taskItem from './taskItem';

function taskList (){
    return(
        <div>
            {taskItem.length ===0?(
                <p className="text-gray-500 text-center">No tasks available</p>
            ):(
                <ul>
                    {taskItem.map((task)=>(
                        <taskItem 
                        key={task.id} 
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default taskList;
