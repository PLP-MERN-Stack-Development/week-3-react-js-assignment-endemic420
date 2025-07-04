import { Routes, Route } from 'react-router-dom';
import './App.css';
import TaskManager from './components/TaskManager';
import Home from './pages/home';
import About from './pages/about';
import Layout from './components/Layout';
import ApiData from './components/ApiData';
import {ThemeProvider} from "./context/ThemeContext"
import {useState} from "react";

function App() {
  return( 
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Layout>
          <main className="flex-1">          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<TaskManager />} />
              <Route path="/about" element={<About />} />
              <Route path="/ApiData" element={<ApiData/>} />
            </Routes>
          </main>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App; 