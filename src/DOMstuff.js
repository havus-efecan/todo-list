import { addProjectEventListeners,displayProjectTasks,removeTask } from "./index"

const mainContainer = document.querySelector('.main-container')
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
export const taskContainer = document.querySelector('.tasks')
export const projects = document.querySelector('.default-projects-list')
const userProjectContainer = document.querySelector('.user-projects')

export const addProjectButton = document.querySelector('.add-project-button')
export const addTaskButton = document.querySelector('.add-task-button')

export const modalOverlay = document.querySelector('#modal-overlay')
export const submitButton = document.querySelector('.submit-task-button')

export const confirmProjectButton = document.querySelector('.confirm-project') 
export const cancelProjectButton = document.querySelector('.cancel-project')
export const projectNameInput = document.querySelector('.project-name-input-field')


let projectNameDiv = document.body.querySelector('.project-name-input')



export let projectList = [projects.children[0],projects.children[1],projects.children[2]]


export function drawNewProjectContainer(name){

    let newProjectContainer = document.createElement('button')
    newProjectContainer.innerText = name
    userProjectContainer.appendChild(newProjectContainer)
    projectNameDiv.style.display = 'none'
    projectList.push(newProjectContainer)


for(let i = 0; i < projectList.length;i++){
    projectList[i].addEventListener('click', ()=>{
 

        for(let j = 0; j < projectList.length;j++){
            projectList[j].classList.remove('highlighted');
        }
  
        projectList[i].classList.add('highlighted');

        hideProjects()
        displayProjectTasks(projectList[i].innerText)

});
}
}    

export function hideProjects(){
    let length = taskContainer.children.length
    for(let i = 0; i < length;i++){
        taskContainer.children[0].remove()
    }
}



export function getProjectName(){

    projectNameDiv.style.display = 'flex'

}


cancelProjectButton.addEventListener('click',()=>{
    projectNameDiv.style.display = 'none'
})


export function drawTask(toDo){

    const taskDiv = document.createElement('div')
    const taskLeft = document.createElement('div')
    const taskRight = document.createElement('div')
    const taskCenter = document.createElement('div')


    const checkbox = document.createElement('input')
    checkbox.classList.add('checkbox')
    checkbox.type = 'checkbox'
    

    const taskName = document.createElement('h1')
    taskName.innerHTML = toDo.title

    taskLeft.appendChild(checkbox)
    taskLeft.appendChild(taskName)

    const taskNotes = document.createElement('p')
    taskNotes.innerHTML = toDo.description

    taskCenter.appendChild(taskNotes)


    const viewDetails = document.createElement('i')
    viewDetails.classList.add('fa-solid')
    viewDetails.classList.add('fa-eye')
    viewDetails.style = 'color:rgb(109, 109, 109);'


    const garbageButton = document.createElement('i')
    garbageButton.classList.add('fa-solid')
    garbageButton.classList.add('fa-trash')
    garbageButton.style = 'color:rgb(109, 109, 109);'


    const date = document.createElement('h2')
    date.innerText = toDo.dueDate

    taskRight.appendChild(date)
    taskRight.appendChild(viewDetails)
    taskRight.appendChild(garbageButton)

    taskDiv.classList.add('task')
    taskLeft.classList.add('task-left')
    taskRight.classList.add('task-right')
    taskCenter.classList.add('task-center')

    taskDiv.appendChild(taskLeft)
    taskDiv.appendChild(taskCenter)
    taskDiv.appendChild(taskRight)


    taskContainer.appendChild(taskDiv)

    garbageButton.addEventListener('click',()=>{
        removeTask(toDo,getCurrentContainer())
        eraseTask(event.target)
    })

}


function eraseTask(clickedElement){

    clickedElement.parentNode.parentNode.remove()

}




addTaskButton.addEventListener('click', ()=>{

    modalOverlay.style.display = 'flex'



})



export function gatherTaskInfo(){

    let taskName = document.querySelector('#task-name').value
    let taskDescription = document.querySelector('#task-description').value
    let taskDate = document.querySelector('#task-date').value
    let taskPrioLow = document.querySelector('#prio-low')
    let taskPrioMed = document.querySelector('#prio-med')
    let taskPrioHigh = document.querySelector('#prio-high')

    let prio

    if(taskPrioLow.checked){
        prio = 'low'
    } else if (taskPrioMed.checked){
        prio = 'med'
    } else if (taskPrioHigh.checked){
        prio = 'high'
    }

    const taskInfo = {

        taskName : taskName,
        taskDescription : taskDescription,
        taskDate : taskDate,
        taskPrio : prio

    }

    return taskInfo

}


export function getCurrentContainer(){
        for(let i = 0; i < projectList.length;i++){
            if(projectList[i].classList.contains('highlighted') && i != 1 && i != 2){
                return projectList[i].innerText
            }
        }
        return 'Inbox'
}


