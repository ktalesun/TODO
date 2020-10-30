export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }

  eliminarTodo(id) {}

  marcarComoCompletado(id) {}

  eliminarTodos() {}
}
