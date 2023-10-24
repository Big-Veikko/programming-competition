import React, {useState} from "react";
import './styles.scss';

//components
import Button from '../form/button';
import Input from '../form/input';
import Modal from '../modal';

// backend api
import { useAddTodoMutation } from "../../services/expressApi";
import { expressApi } from "../../services/expressApi";
import { useDispatch } from "react-redux";

const TodoForm = () => {
    const dispatch = useDispatch();

    const [hideModal, setHideModal] = useState<boolean>(true);
    const [title, setTitle] = useState<string>('');

    const [addTodo] = useAddTodoMutation();

    const modalConfig = {
        title: 'Add a new todo',
        hideModal,
        toggleModal: () => setHideModal(!hideModal)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const payload = {
            title
        }
        addTodo(payload)
        .unwrap()
        .then(() => {
            dispatch(expressApi.util.invalidateTags(['Todos']))
            window.location.reload();
        })
    }
    return (
        <>
            <Button
                onClick={() => setHideModal(!hideModal)}
            >
                Add a new todo
            </Button>
            <Modal {...modalConfig}>
                <form className="todo-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} key={'todoForm'}>
                    <Input type="text" name="title" placeholder="Add a new todo" value={title} handleChange={(e) => setTitle(e.target.value)} key={'title_input'} />
                    <Button type="submit" key={'submit_button'}>
                        Add
                    </Button>
                </form>
            </Modal>
        </>
    )
};

export default TodoForm;