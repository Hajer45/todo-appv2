let input = document.querySelector(".todo-content");
let btn = document.querySelector(".btn");
let list = document.querySelector(".box");
let tasks =[];

btn.onclick = function(){
    if(input.value !== ""){
        addTask(input.value);
        input.value = "";
    }
};


function addTask(taskTitle){
    const task = {
        id:Date.now(),
        title:taskTitle,
        completed:false
    };
    tasks.push(task);
    addTaskToPage(tasks);
};
function addTaskToPage(tasks){
    list.innerHTML="";
    tasks.forEach((elm)=>{
        let li = document.createElement("li");
        li.className="todo";
        li.setAttribute("id",elm.id);
        li.appendChild(document.createTextNode(elm.title));
        let i = document.createElement('i');
        i.className="fas fa-trash-alt";
        li.appendChild(i);
        list.append(li);


    })
};
