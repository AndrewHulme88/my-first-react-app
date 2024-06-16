const todos = [
  {task: "Mow the lawn", id: uuid()},
  {task: "Work on Dev Projects", id: uuid()},
  {task: "Feed the dog", id: uuid()},
];

function ToDoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
