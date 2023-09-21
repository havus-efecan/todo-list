import '../src/style.css';
import {deleteProjectCancel,modalOverlay2,deleteProjectConfirm,eraseProjectContainer,deleteProject, drawTask,hideProjects,getCurrentContainer,cancelProjectButton,projects,projectList,confirmProjectButton,projectNameInput,addProjectButton,drawNewProjectContainer,getProjectName,addTaskButton,modalOverlay,submitButton,gatherTaskInfo} from './DOMstuff';
import {updateProjectsMap,getProjectsFromStorage,updateProjectsInStorage,removeTaskFromProject,emptyProjectArray,addToContainer,isTaskDueToday,isTaskDueThisWeek,createToDo,inbox,createProject, projectsMap,getProjectsMap} from './logic'


updateProjectsMap()
displayProjectTasks(' Inbox')


function drawExistingProjects(){

    let existingProjects = getProjectsFromStorage()

    const keysArray = Array.from(existingProjects.keys());


    for(let i = 3; i < existingProjects.size; i++){


        drawNewProjectContainer(keysArray[i])
    }

 
}

drawExistingProjects()



submitButton.addEventListener('click',()=>{

    
    let taskInfo = gatherTaskInfo()
    let task = createToDo(taskInfo.taskName,taskInfo.taskDescription,taskInfo.taskDate,taskInfo.prio)
    let currentContainerName = getCurrentContainer()

        let projectsMap = getProjectsMap()
        
        let currentContainer = projectsMap.get(currentContainerName)
        if(currentContainerName === " Today" || currentContainerName === " This week"){
            addToContainer(task,projectsMap.get(" Inbox"))
            task.addToContainer(" Inbox")


        } else {
            addToContainer(task,currentContainer)
            task.addToContainer(currentContainerName)
            drawTask(task)

        }
    
    
    if(isTaskDueToday(task)){
        addToContainer(task,projectsMap.get(" Today"))
        task.addToContainer(" Today")

    }

    if(isTaskDueThisWeek(task)){

        addToContainer(task,projectsMap.get(" This week"))
        task.addToContainer(" This week")

    }

    updateProjectsInStorage()

    modalOverlay.style.display = 'none'

})


export function addProjectEventListeners(){

    for(let i = 0; i < projectList.length;i++){
        projectList[i].addEventListener('click', ()=>{
     
    
            for(let j = 0; j < projects.children.length;j++){
                projectList[j].classList.remove('highlighted');
            }
      
            projectList[i].classList.add('highlighted');
            hideProjects()

            displayProjectTasks(projectList[i].innerText)
            
    });
    }
}

addProjectEventListeners()

addProjectButton.addEventListener('click',()=>{

    getProjectName()    

})

confirmProjectButton.addEventListener('click', ()=>{
    let newProjectName = projectNameInput.value
    let newProjectObject = createProject(newProjectName)
    projectsMap.set(newProjectName,newProjectObject)

    updateProjectsInStorage(newProjectName)
    
    drawNewProjectContainer(newProjectName)
})

// function addProjectToLocalStorage(newProjectName){

//     let project = projectmap.get(newProjectName)

//     let serializedProject = JSON.stringify(project)
//     localStorage.


// }


export function displayProjectTasks(containerName){

    let map = getProjectsMap()


    for (const [key, value] of map) {
        if(key === containerName){
            let currentProjectArray = projectsMap.get(key)
            for(let i = 0; i < currentProjectArray.length;i++){
                drawTask(currentProjectArray[i])
            }
        }
      }
      




}

export function removeTask(task,projectName){

    let projectsMap = getProjectsMap()
    let projectArray = projectsMap.get(projectName)
    let containers = task.containers

    let arrayLength = projectArray.length

    for(let i = 0;i < containers.length;i++){
        for(const key of projectsMap.keys()){
            if(containers[i] === key){
                removeTaskFromProject(task,key)
            }
        }
    }

    updateProjectsInStorage()

}

function removeProject(projectName){

    let project = projectsMap.get(projectName)

    for(const task of project){
        for(const container of task.containers){
            if(container === ' Inbox'){
                removeTask(task, ' Inbox')
            }
            if(container === ' Today'){
                removeTask(task, ' Today')

            }
            if(container === ' This week'){
                removeTask(task, ' This week')

            }
        }
    }
    
    hideProjects(project)
    emptyProjectArray(projectName)
    eraseProjectContainer(projectName)





}



deleteProjectConfirm.addEventListener('click', ()=>{
    let currentContainer = getCurrentContainer()
     if (currentContainer === (' Inbox' || ' Today' || ' This week')){
         return
     } else {

        


        removeProject(currentContainer)
        modalOverlay2.style.display = 'none'
        // emptyProjectArray(currentContainer)
        updateProjectsInStorage()

     }
 })

 deleteProject.addEventListener('click',()=>{
    let currentContainer = getCurrentContainer()

    if (currentContainer === (' Inbox' || ' Today' || ' This week')){
        return
    } else {

        modalOverlay2.style.display = 'flex'
        let modalHeader = document.querySelector('#delete-project-header')
        modalHeader.innerText = `Delete project ${currentContainer}?`
    }
 })

 deleteProjectCancel.addEventListener('click',()=>{
    modalOverlay2.style.display = 'none'

 })













