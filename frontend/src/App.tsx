import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import TodosPage from "./pages/TodosPage";



//styles
import './default.scss';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<TodosPage/>}/>
        </Routes>
    )
}

export default App;