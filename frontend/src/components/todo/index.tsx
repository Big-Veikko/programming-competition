import React from "react";
import './styles.scss';

// redux imports
import { useGetTodosQuery } from "../../services/expressApi";
import { TodoModel } from "../../services/todo/todo.model";

const Todo: React.FC = () => {
    const { data: todo = [], error, isLoading } = useGetTodosQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        console.log(error);
        

    }

    return (
        <>
            <div className="todo-body">
                <ul className="todo-list">
                    {todo.map((todo: TodoModel) => (
                        <li key={todo.id} className="todo-item">
                            <span className="todo-item-text">{todo.title}</span>
                        </li>
                    ))}
                </ul>
            </div>  
        </>
    );
}

export default Todo;