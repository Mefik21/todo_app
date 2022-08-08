import { Icon } from '@iconify/react';

const TodoItem = ({ item, onCompleteTodo, requestSelectedTodo, onDeleteTodo }) => {
    const { id, title, description, isComplete } = item;

    return (
        <li
            className={`d-flex flex-row mb-10 justify-content-between p-05 border-radius-5 ${
                isComplete ? 'bg-brand2 color-white' : ''
            }`}>
            {/* Блок с контентом */}
            <div className="d-flex flex-column">
                <div className="d-flex flex-column mb-05">
                    <span>Заголовок: </span>
                    <span className={`weight-600 size-16 ${isComplete ? 'decoration-line-through' : ''}`}>{title}</span>
                </div>
                <div className="d-flex flex-column">
                    <span>Описание: </span>
                    <span className={`weight-500 size-16 ${isComplete ? 'decoration-line-through' : ''}`}>
                        {description}
                    </span>
                </div>
            </div>

            {/* Блок с действиями */}
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn brand mx-05" onClick={(e) => onCompleteTodo(e, id)}>
                    <Icon icon="akar-icons:check-box" height={25} width={25} />
                </button>
                <button className="btn brand mx-05" onClick={(e) => requestSelectedTodo(e, id)}>
                    <Icon icon="bx:edit" height={25} width={25} />
                </button>
                <button className="btn brand mx-05" onClick={(e) => onDeleteTodo(e, id)}>
                    <Icon icon="ant-design:delete-filled" height={25} width={25} />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
