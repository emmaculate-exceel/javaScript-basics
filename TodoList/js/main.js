//arrays 
let tasks = [];
//task functions
let taskStatus=["completed", "unCompleted", "inProgress"];

let createTaskButton = document.getElementById("createTask");

//disabled button
//createTaskButton.setAttribute("disable", "disabled");

 //take the input value of the text box and textarea
//let taskTitle = document.getElementById("taskTitle").value;
//let taskDescription = document.getElementById("taskDescription").value;

//this code runs when the form is submitted
document.getElementsByTagName("form")[0].addEventListener("submit",function(e){
    // prevent the default form action
    e.preventDefault();

    //if the input field doesn't contain a text value do not take us to the next page
    if(isEmpty(taskTitle) && isEmpty(taskDescription)){
        let title = document.getElementById("taskTitle").value;
        let description = document.getElementById("taskDescription").value; 
        createTask(title, description);

        //declare a variable and initialize it to a new task
        let table = document.getElementById("newTask");
        hideHtmlElement(table);
        // hide an html section 
        let sectionElement = document.getElementById("viewTasks");
        showHtmlElement(sectionElement); 
    
    }
    else{
        // else send the user a pop up message 
        alert("please enter an input value!!");

    });

        //find out if an input is field is empty
function isEmpty(input){
        if(input.value > 0){
            return true;
        }
        else{
            //input field is empty
            return false;
        }
};


document.getElementById("btnNewTask").addEventListener("click", function (){
    let sectionElement = document.getElementById("viewTasks");
    // hide an element.
        hideHtmlElement(sectionElement);
    
        let table = document.getElementById("newTask");
        showHtmlElement(table);
});


function createTask(taskTitle, taskDescription){
    let task = {
        title: taskTitle, 
        description: taskDescription,
        status:taskStatus[1]

    };
//add new task to the global tasks array to be saved
     tasks.push(task);
};

// this function is created to add a bootstrap function to a section on the page 
function hideHtmlElement(element){
// this is to add a boostrap class name to perform a hide function.
    element.classList.add("d-none");
};

// function to remove the hide function
function showHtmlElement(element){
    element.classList.remove("d-none");
};

// my arrays examples in javascript research
var come = ["check", "see", "hold"];
     check = come.slice(2);
     console.log(check);

     // tenary operator
    var age = 15;
    var voteable = (age > 18 ) ? "too young":"old enough";
    console.log(voteable);