// Add todos logic
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const plus = document.querySelector('.plus');
const pendingNum = document.querySelector('.pendingNum');
let currentTodos = 0
const generateTemplate = todo => {

      const html = `
         <li class="list-group-item d-flex justify-content-between align-items-center" >
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete" ></i>
         </li> 
         `;

          list.innerHTML += html;
          
};

 addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

   if(todo.length){
    generateTemplate(todo);
    currentTodos = currentTodos+1

    console.log(currentTodos)
    pendingNum.innerText =currentTodos; 
    
    plus.value = " ";
   
   }
    
 });


// Delete todos logic
list.addEventListener('click', e => {
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        currentTodos = currentTodos-1;
        pendingNum.innerText =currentTodos; 
    }
});

// search todos logic

 


// console.log(list.children.add.length);

// let counter= 0;
// for (let i = 0; i <  list.children.length; i++) {
//   if ( list.children[i].children === 0) counter++;
// }

// console.log(counter); 


  