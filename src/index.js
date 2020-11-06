import "../src/styles.css";
import { Todo, TodoList } from "./classes";
import { crearTodoHTML } from "./js/componentes";

export const TodoLista = new TodoList();

console.log(TodoLista.todos);

TodoLista.todos.forEach(todo => crearTodoHTML(todo));