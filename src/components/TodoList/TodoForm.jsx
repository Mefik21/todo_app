import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const TodoForm = ({ onAddTodo, onEditTodo, itemToEdit }) => {
    const defaultState = {
        id: new Date(),
        title: '',
        description: '',
        isComplete: false
    };

    const [todoState, setTodoState] = useState(defaultState);

    useEffect(() => {
        if (itemToEdit) setTodoState(itemToEdit);
        else setTodoState(defaultState);
    }, [itemToEdit]);

    const handleChangeState = (e, key) => {
        e?.preventDefault();

        const val = e.currentTarget.value;

        setTodoState((prev) => ({
            ...prev,
            [key]: val
        }));
    };

    const addTodo = (e) => {
        e?.preventDefault();

        onAddTodo(todoState);
        setTodoState({ ...defaultState });
    };

    const editTodo = (e) => {
        e?.preventDefault();

        onEditTodo(todoState);
        setTodoState({ ...defaultState });
    };

    return (
        <form className="d-flex flex-column w-50">
            <input
                value={todoState.title}
                type="text"
                onChange={(e) => {
                    handleChangeState(e, 'title');
                }}
                placeholder="Заголовок"
                className="h-4 mb-05 border-brand border-radius-5 px-10 py-05 color-brand"
            />
            <input
                value={todoState.description}
                type="text"
                onChange={(e) => {
                    handleChangeState(e, 'description');
                }}
                placeholder="Описание"
                className="h-4 mb-05 border-brand border-radius-5 px-10 py-05 color-brand"
            />
            <div className="d-flex justify-content-end">
                {!itemToEdit ? (
                    <button className="btn brand d-flex justify-content-between px-10 ml-10" onClick={addTodo}>
                        <span className="mr-10 weight-700">Добавить</span>
                        <Icon icon="carbon:add-filled" height={25} width={25} />
                    </button>
                ) : (
                    <button
                        className="btn brand align-self-end d-flex justify-content-between px-10 ml-10"
                        onClick={editTodo}>
                        <span className="mr-10 weight-700">Сохранить</span>
                        <Icon icon="ant-design:save-filled" height={25} width={25} />
                    </button>
                )}
            </div>
        </form>
    );
};

export default TodoForm;
