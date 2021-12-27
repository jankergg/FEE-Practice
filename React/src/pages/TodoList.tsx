import React from "react";
import "@/styles/page.css";

type TodoItemProp = {
  id: number;
  title: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const TodoItem: React.FC<TodoItemProp> = React.memo(
  ({ id, title, onChange, checked }) => {
    return (
      <div className='border-2'>
        <label htmlFor={`${id}`} className='flex flex-row'>
          <input
            type='checkbox'
            id={`${id}`}
            name='todo-item'
            checked={checked}
            className='border-2 p-2 mt-1'
            onChange={onChange}
          />
          <p className='flex-1 pl-2'>{title}</p>
        </label>
      </div>
    );
  },
  (prev, next) => prev.id === next.id && prev.title === next.title
);

type TodoListProp = {
  todos: TodoItemProp[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
const TodoList: React.FC<TodoListProp> = React.memo(({ todos, onChange }) => {
  return (
    <div className='border-2'>
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} key={todo.id} onChange={onChange} />
      ))}
    </div>
  );
});

const TodoListPage = () => {
  const [todos, setTodos] = React.useState([] as TodoItemProp[]);
  const InputRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (InputRef?.current?.value) {
      setTodos([...todos, { id: todos.length + 1, title: InputRef.current?.value }]);
      InputRef.current.value = "";
    }
    e.preventDefault();
  };
  const toggleCheck = React.useCallback(
    (e) => {
      const id = e.currentTarget.id;
      const checked = e.currentTarget.checked;
      const _items = [...todos];
      const item = _items.find((t) => Number(t.id) === Number(id));
      console.log(item);
      if (item) {
        item.checked = checked;
        setTodos(_items);
        console.log(_items);
      }
    },
    [todos]
  );
  return (
    <div className='page'>
      <form onSubmit={handleSubmit} className='flex pt-4'>
        <input
          ref={InputRef}
          type='text'
          name='todo-input'
          className='flex-1 border-2 border-gray-500 p-2 outline-none'
        />
      </form>
      <TodoList todos={todos} onChange={toggleCheck} />
    </div>
  );
};

export default TodoListPage;
