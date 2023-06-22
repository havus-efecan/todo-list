let thisWeek = []
let today = []

export let inbox = []

export let projectsMap = new Map([
    
    [" Inbox", inbox],
    [" Today", today],
    [" This Week", thisWeek]


])

export function getProjectsMap(){
    return projectsMap
}


const toDoFactory = (title,description,dueDate,priority) => {

    let toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
      };

    return {toDoItem}
}





export function createToDo(title,description,dueDate,priority){
    let newToDo = toDoFactory(title,description,dueDate,priority).toDoItem
    return newToDo
}

export function addToContainer(toDo,container){

    container.push(toDo)
}



export function createProject(title){
    let newProject = []
    return newProject
}


function isTaskDueToday(){

}


function isTaskDueThisWeek(){
    
}