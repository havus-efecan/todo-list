import { projects } from "./DOMstuff"

let thisWeek = []
let today = []

export let inbox = []

export let projectsMap = new Map([
    
    [" Inbox", inbox],
    [" Today", today],
    [" This week", thisWeek]


])

export function getProjectsMap(){
    return projectsMap
}

export function removeTaskFromProject(task,project){
    let removedProject = projectsMap.get(project)
    for(let i = 0; i < removedProject.length;i++){
        if(removedProject[i].title === task.title){
            removedProject.splice(i,1)
        }
    }
}

const toDoFactory = (title,description,dueDate,priority) => {

    let toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        containers : [],

        addToContainer : function(container) {
            for(const key of projectsMap.keys()){
                if(container === key){
                    toDoItem.containers.push(key)
                }
            }
        }
      }

     


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

    const date = new Date()
    let day = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()


export function isTaskDueToday(toDo){


   let fullDate = date.toISOString().slice(0,10)
    if(toDo.dueDate == fullDate){
        return true
    }

    return false

}


export function isTaskDueThisWeek(toDo){


    let fullDate = date.toISOString().slice(0,10)

    let userDate = new Date(toDo.dueDate)

    let difference = userDate - date
    var differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    var isWithinWeek = Math.abs(differenceInDays) <= 7;




    
    if(isWithinWeek ){
        return true
    }

    return false

}
    

export function emptyProjectArray(projectName){
    projectsMap.get(projectName).length = 0
}