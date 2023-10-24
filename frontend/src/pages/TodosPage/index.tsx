import React from "react";

import Todo from "../../components/todo";
import TodoForm from "../../components/todoForm";

const TodosPage: React.FC = () => {
    return (
        <>
            <Todo/>
            <TodoForm/>
        </>
    )
}

export default TodosPage;