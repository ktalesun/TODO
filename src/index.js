import "../src/styles.css";
import { Todo, TodoList } from "./classes";

const tarea = new Todo("Aprender Javascript");
const TodoLista = new TodoList();

const Tarea2 = new Todo("Aprender css");

TodoLista.nuevoTodo(tarea);
TodoLista.nuevoTodo(Tarea2);

console.log({ TodoLista });
