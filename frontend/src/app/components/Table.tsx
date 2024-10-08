// Interface representing a single to-do item
interface todoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Props interface for the Table component, which receives paginated data
interface TableProps {
  pageData: todoItem[];
  onToggleComplete: (id: number, completed: boolean) => void;
  onDeleteTodo: (id: number) => void;
}

// Functional component to render a table of to-do items
const Table: React.FC<TableProps> = ({
  pageData,
  onToggleComplete,
  onDeleteTodo,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pageData.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id, !todo.completed)}
              />
            </td>
            <td>
              <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
