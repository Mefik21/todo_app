import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    const defaultTodos = [
        { id: 1, title: 'Item 1', description: 'Description for "Item 1"', isComplete: true },
        { id: 2, title: 'Item 2', description: 'Description for "Item 2"', isComplete: false },
        { id: 3, title: 'Item 3', description: 'Description for "Item 3"', isComplete: false },
        { id: 4, title: 'Item 4', description: 'Description for "Item 4"', isComplete: false },
        { id: 5, title: 'Item 5', description: 'Description for "Item 5"', isComplete: false }
    ];

    const [todoItems, setTodoItems] = useState(defaultTodos);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const onAddTodo = (newTodo) => {
        setTodoItems((prev) => [...prev, newTodo]);
    };

    const onCompleteTodo = (e, id) => {
        e?.preventDefault();
        const newState = todoItems.map((item) => {
            if (item.id === id) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        setTodoItems(newState);
    };

    const onEditTodo = (todo) => {
        const newState = todoItems.map((item) => {
            if (item.id === todo.id) {
                item = todo;
            }
            return item;
        });
        setSelectedTodo(null);
        setTodoItems(newState);
    };

    const onDeleteTodo = (e, id) => {
        e?.preventDefault();

        const newState = todoItems.filter((item) => item.id !== id);
        setTodoItems(newState);
        setSelectedTodo(null)
    };

    const requestSelectedTodo = (e, id) => {
        e?.preventDefault();
        const currentTodo = todoItems.find((item) => item.id === id);
        setSelectedTodo(currentTodo);
    };

    return (
        <div className="mt-10 d-flex flex-column justify-content-center align-items-center ">
            <div className="d-flex justify-content-center">
                <h2 className="color-brand mr-10">Завершено: {todoItems.filter((item) => item.isComplete).length}</h2>
                <h2 className="color-brand">Всего: {todoItems.length}</h2>
            </div>

            <TodoForm onAddTodo={onAddTodo} onEditTodo={onEditTodo} itemToEdit={selectedTodo} />

            {todoItems.length ? (
                <ul className="p-05 mt-10 d-flex flex-column border-brand border-radius-5 w-50">
                    {todoItems.map((item, idx) => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            onCompleteTodo={onCompleteTodo}
                            onDeleteTodo={onDeleteTodo}
                            requestSelectedTodo={requestSelectedTodo}
                        />
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default TodoList;
