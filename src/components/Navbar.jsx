import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMoon} from "react-icons/fa";
import{ TiWeatherSunny} from "react-icons/ti"
import {useTheme} from "../context/ThemeContext";

export default function Navbar(){
  const { theme, toggleTheme }= useTheme("");
  return (
    <nav className="bg-white dark:bg-gray-600 px-6 py-3 flex justify-between rounded shadow-xl dark">
      <div className="font-bold text-xl text-gray-900 dark:text-gray-100">TaskManager</div>
      <div className="space-x-4">
        <button onClick={()=>{
          toggleTheme("") 
        }}
        className={`bg-transparent hover:bg-zinc-500 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white ${
          theme==="" ? 'bg-blue-300 text-white':'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white'
        }`}>
          <TiWeatherSunny />
        </button>
        <button onClick={()=>{
          toggleTheme("dark")
         }}
         className={`bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white ${
          theme==="" ? 'bg-blue-300 text-white':'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white'
         }`} >
          <FaMoon />
        </button>
        <Link to="/" className="text-gray-900 dark:gray-100">Home</Link>
        <Link to="/tasks" className="text-gray-900 dark:gray-100">Tasks</Link>
        <Link to="/about" className="text-gray-900 dark:gray-100">About</Link>
      </div>
    </nav>
  );
}