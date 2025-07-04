import { NavLink} from "react-router-dom"

function Home(){
    return(
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 mt-8">
                Welcome to Task Manager
            </h1>
            <p className="text-gray-700 mb-6"> Organise your tasks efficiently with Task Manager. Navigate to the Tasks page to start adding and managing your tasks! </p>
            <NavLink to="/tasks" className="inline-block shadow-md bg-blue-300 font-bold text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
                Go to Tasks
            </NavLink>
        </div>
    );
}

export default Home;