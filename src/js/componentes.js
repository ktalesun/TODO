// Referencias en el HTML

import { Todo } from "../classes";
import { TodoLista } from "../index";
const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");
const ulfiltros = document.querySelector(".filters");
const anchorfiltro = document.querySelectorAll('.filtro');


export const crearTodoHTML = (todo) => {
  const htmlTodo = `<li class="${todo.completado ? "completed" : ""}" data-id=${
    todo.id
  }>
  <div class="view">
    <input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
    <label>${todo.tarea}</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
</li>`;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

//eventos

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtInput.value != "") {
    const nuevoTodo = new Todo(txtInput.value);
    TodoLista.nuevoTodo(nuevoTodo);
    console.log(TodoLista);
    crearTodoHTML(nuevoTodo);
    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nombreElemento = event.target.localName;
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute("data-id");

  if (nombreElemento.includes("input")) {
    TodoLista.marcarComoCompletado(todoId);
    todoElemento.classList.toggle("completed");
  }else if (nombreElemento.includes('button')){
    TodoLista.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);

  }


});

btnBorrar.addEventListener('click', (event)=>{
  TodoLista.eliminarCompletados();

  for (let i = divTodoList.children.length-1; i>=0; i--) {
    const elemento = divTodoList.children[i];

    if(elemento.classList.contains('completed')){
      divTodoList.removeChild(elemento);
    }
  }
})

ulfiltros.addEventListener('click', (event)=>{

  const filtro = event.target.text;
  anchorfiltro.forEach(elem => elem.classList.remove('selected'));
  event.target.classList.add('selected');

  if(!filtro){
    return;
  }
  for (const elemento of divTodoList.children){
    elemento.classList.remove('hidden');
    const completado = elemento.classList.contains('completed');

    switch (filtro){
      case 'Pendientes':
            if(completado) {
              elemento.classList.add('hidden');
            } break;
      case 'Completados':
            if(!completado) {
              elemento.classList.add('hidden');
            } break;
    }
  }

})
