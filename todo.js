const form = document.querySelector("form");
const  todoinput = document.getElementById("todo-text");
const todolist = document.querySelector("#todo-list");
const btn = document.querySelector('#submit');
let alltodos = getitem();
updatetodolist();
form.addEventListener("submit",(e)=>{
e.preventDefault();
addtodos();

})
function addtodos(){
  let todotext = todoinput.value.trim();

  if(todotext.length > 0){
    const todoobject = {
      Text: todotext,
      completed: false
    };
    alltodos.push(todoobject);
    todoinput.value = "";
    savetodos();
    updatetodolist();
  }
}
function updatetodolist(){
    todolist.innerHTML = "";
    alltodos.forEach((todo,todoindex) => {
      todoitem = createtodoitem(todo,todoindex);
      todolist.append(todoitem);
    });
}
function createtodoitem(todo, todoindex){

  const todoid = "todo-" + todoindex;
  const todotext = todo.Text;
  const li = document.createElement("li");
  li.className = "todo";

  li.innerHTML = `
    <input type="checkbox" id="${todoid}">
    <label for="${todoid}" class="custom-checkbox"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></label>
    <label class="todo-text">${todotext}</label>
    <button class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#101114"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
  `;

  const deletebtn = li.querySelector(".delete-btn");

  deletebtn.addEventListener("click", () => {
    deletetodos(todoindex);
  });
  const checkbox = li.querySelector("input");
  checkbox.addEventListener("change",()=>{
    alltodos[todoindex].completed = checkbox.checked;
    savetodos();
  })
  checkbox.checked = todo.completed;

  return li;
}

function deletetodos(index){
  alltodos.splice(index, 1);
  savetodos();
  updatetodolist();
}
function savetodos(){
  let alltodo = JSON.stringify(alltodos);
  localStorage.setItem("todos",alltodo);
}
function getitem(){
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos)
}


