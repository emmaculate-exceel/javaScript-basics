//arrays 
let tasks = [];
//task functions
let taskStatus=["completed", "unCompleted", "inProgress"];

document.getElementById("createTask").addEventListener("click", function(){
    let title = document.getElementById("taskTitle").value;
    let description = document.getElementById("taskDescription").value;
    
  createTask(title, description);
// declare a variable and initialize it to an element.


    let sectionElement = document.getElementById("newTask");
// hide an element.
    hideHtmlElement(sectionElement);

    console.log(tasks);
});


    let variable1 =  "a";
    let variable2 = variable1;
    console.log(variable1);
    console.log(variable2);










function createTask(taskTitle, taskDescription){
    let task = {
        title: taskTitle, 
        description: taskDescription ,
        status:taskStatus[1]

    }
//add new task to the global tasks array to be saved
     tasks.push(task);
}

// this function is created to add a function to a section on the page 
function hideHtmlElement(element){
// this is to add a boostrap class name to perform a certain action .
    element.classList.add("d-none");

}

// the date object in use 

 //var me = new Date();
//console.log(me.getDay());


// creating a date application on the click of a button in to a p tag
 document.getElementById("jav").addEventListener("click", function(){
     let calTime = Date();
     let d = document.getElementById("sol").innerHTML = calTime;

    console.log(calTime);

 })