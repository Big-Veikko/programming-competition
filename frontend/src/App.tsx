import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";

// redux imports
import { useDispatch } from "react-redux";

// pages
import TodosPage from "./pages/TodosPage";



//styles
import './default.scss';
import { DirectoryPage } from "./pages/DirectoryPage";

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch(expressApi.util.resetApiState());
    }, [dispatch]);
    return (
        <Routes>
            <Route path="/" element={<TodosPage/>}/>
            <Route path="/directory" element={<DirectoryPage/>}/>
        </Routes>
    )
}

export default App;