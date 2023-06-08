// VARIABLES
const addToCartButtons = document.querySelectorAll(".cart-adding");
const chosenItems = document.querySelector(".items-chosen");
const addButton = document.querySelector(".add-button");
const minusButton = document.querySelector(".minus-button");
const quantityInput = document.querySelector(".quantity-from-button");

// EVENTS
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCartOnce);
});

chosenItems.addEventListener("click", removeItem); // Add event listener to the chosenItems container

addButton.addEventListener("click", increment);
minusButton.addEventListener("click", decrement);

// FUNCTIONS
function addToCartOnce(e) {
  e.preventDefault();

  const toBuy = document.createElement("div");
  toBuy.classList.add("itemAdded");

  const item = document.createElement("li");
  const prc = document.createElement("span"); // Use <span> instead of <h2> for pricing

  const h2Element = this.parentNode.parentNode.querySelector("h2");
  const h3Element = this.parentNode.parentNode.querySelector("h3");

  item.textContent = h2Element.textContent;
  item.classList.add("tobuy-item");
  prc.textContent = h3Element.textContent;

  toBuy.appendChild(item);
  toBuy.appendChild(prc); // Append the pricing span to the item container

  const howMany = document.createElement("span");
  const formHTML = `
  <form>
    <div>
      <input class="quantity-from-button" type="number" id="quantity" name="quantity" min="1" value="1">
    </div>
  </form>
`;
  howMany.innerHTML = formHTML;
  toBuy.appendChild(howMany);

  const removeButton = document.createElement("button"); // Create remove button
  removeButton.innerHTML = `<i class="fa-solid fa-trash"></i>`; // Set the text for the remove button
  removeButton.classList.add("remove-item"); // Add a class to the remove button
  toBuy.appendChild(removeButton); // Append the remove button to the item container

  chosenItems.appendChild(toBuy);

  // Remove event listener after the first click
  this.removeEventListener("click", addToCartOnce);
}

function removeItem(e) {
  if (e.target.classList.contains("fa-trash")) {
    const itemContainer = e.target.closest(".itemAdded");
    itemContainer.remove();
  }
}

// Increment function
function increment() {
  const currentValue = parseInt(quantityInput.value);
  const incrementedValue = currentValue + 1;
  quantityInput.value = incrementedValue;
}

// Decrement function
function decrement() {
  const currentValue = parseInt(quantityInput.value);
  const decrementedValue = Math.max(currentValue - 1, 0);
  quantityInput.value = decrementedValue;
}

/* "use strict"

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')


//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event){
  //prevent from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //CreateLI
  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);



  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-regular fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

  //ADD TO DO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);

    //Clear todo Input value

    todoInput.value = "";
}



function deleteCheck(e){
  const item = e.target;

  //DELETE TODO
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener('transitioned', function(){
        todo.remove();
    })
  }

  if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};


function filterTodo(e){
  const todos = todoList.childNodes;

  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains('completed')){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;


    }
  });
}


function saveLocalTodos(todo){
  //CHECK -- do I already have thing in there

  let todos;

  if(localStorage.getItem('todos') ===null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }

   todos.push(todo);
   localStorage.setItem('todos', JSON.stringify(todos))
}


function getTodos(){
  let todos;

  if(localStorage.getItem('todos') ===null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }

   todos.forEach(function(todo){
      //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //CreateLI
  const newToDo = document.createElement('li');
  newToDo.innerText = todo;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);



  //CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-regular fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

   })
}


function removeLocalTodos(todo){
  let todos;

  if(localStorage.getItem('todos') ===null){
    todos = [];
   }else{
    todos = JSON.parse(localStorage.getItem('todos'));
   }

   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1);
   localStorage.setItem("todos", JSON.stringify(todos))

}*/
