let input = document.querySelector(".todo-content");
let btn = document.querySelector(".btn");
let list = document.querySelector(".box");
let nbTask = document.querySelector(".numTask");
let tasks =[];
// get data 
getDataFromLocalStorage();
btn.onclick = function(){
    if(input.value !== ""){
        addTask(input.value);
        input.value = "";
    }
};
list.addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-trash-alt")){
       
        // remove from local storage
        deleteTask(e.target.parentElement.getAttribute("id"));
         // remove from page
         e.target.parentElement.remove();
         let l = tasks.length;
         countTask(l);
        

    }
});
function addTask(taskTitle){
    const task = {
        id:Date.now(),
        title:taskTitle,
        completed:false
    };
    tasks.push(task);
    addTaskToPage(tasks);
    //add tasks to local storage
    addToLocalStorage(tasks);
};
function addTaskToPage(tasks){
    list.innerHTML="";
    let size = tasks.length;
    tasks.forEach((elm)=>{
        let li = document.createElement("li");
        li.className="todo";
        if(elm.completed){
            li.className = "done todo";
            size--;
        }
        li.setAttribute("id",elm.id);
        li.appendChild(document.createTextNode(elm.title));
        let i = document.createElement('i');
        i.className="fas fa-trash-alt";
        li.appendChild(i);
        list.append(li);
    })
    countTask(size);
};
function addToLocalStorage(tasks){
    window.localStorage.setItem("tasks",JSON.stringify(tasks));
};
function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("tasks");
    if(data){
         tasks = JSON.parse(data);
         addTaskToPage(tasks);
    }
};
function deleteTask(id){
    tasks = tasks.filter((task) => task.id != id);
    addToLocalStorage(tasks);
}
function countTask(size){
    let len ;
    if(size>1)
        len = `${size} Tasks`
    else
        len = `${size} Task`
    nbTask.innerHTML=`<p>${len}</p>`;
}