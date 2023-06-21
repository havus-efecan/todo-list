const mainContainer = document.querySelector('.main-container')
const header = document.querySelector('.header')
const sidebar = document.querySelector('.sidebar')
export const taskContainer = document.querySelector('.tasks')
export const addProjectButton = document.querySelector('.add-project-button')
export const addTaskButton = document.querySelector('.add-task-button')

export const modalOverlay = document.querySelector('#modal-overlay')
export const submitButton = document.querySelector('.submit-task-button')



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
    viewDetails.style.color = 'color:rgb(109, 109, 109);'


    const edit = document.createElement('i')
    edit.classList.add('fa-solid')
    edit.classList.add('fa-ellipsis-vertical')
    edit.style.color = 'color:rgb(109, 109, 109);'


    const date = document.createElement('h2')
    date.innerText = toDo.dueDate

    taskRight.appendChild(date)
    taskRight.appendChild(viewDetails)
    taskRight.appendChild(edit)


    taskDiv.classList.add('task')
    taskLeft.classList.add('task-left')
    taskRight.classList.add('task-right')
    taskCenter.classList.add('task-center')

    taskDiv.appendChild(taskLeft)
    taskDiv.appendChild(taskCenter)
    taskDiv.appendChild(taskRight)

    taskContainer.appendChild(taskDiv)

    edit.addEventListener('click',()=>{
        const clickedElement = event.target
        eraseTask(clickedElement)
    })

}


function eraseTask(clickedElement){

    clickedElement.parentNode.parentNode.remove()

}

function drawProjects(){
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

