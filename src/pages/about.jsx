function About(){
    return(
        <div className= "h-full w-full bg-white dark:bg-transparent mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About the Task Manager</h1>
            <p className="text-gray-800 dark:text-gray-400">
                The Task Manager is a web application that manages users tasks efficiently.The app allows the user to add, delete, and update tasks as needed. It also marks the tasks that are completed.
            </p>
            <p className="text-gray-600 dark:text-gray-500">
                Created by _Dennoh._ as part of PLP 2025 Cohort.
            </p>
        </div>
    )
}

export default About;