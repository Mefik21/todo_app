import Header from './components/Header';
import TodoList from './components/TodoList';

import './scss/index.scss';

const App = () => {
    return (
        <div className="App container py-10">
            <Header />
            <TodoList />
        </div>
    );
};

export default App;
