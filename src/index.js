import '../src/style.css';
import {deleteProjectCancel,modalOverlay2,deleteProjectConfirm,eraseProjectContainer,deleteProject, drawTask,hideProjects,getCurrentContainer,cancelProjectButton,projects,projectList,confirmProjectButton,projectNameInput,addProjectButton,drawNewProjectContainer,getProjectName,addTaskButton,modalOverlay,submitButton,gatherTaskInfo} from './DOMstuff';
import {removeTaskFromProject,emptyProjectArray,addToContainer,isTaskDueToday,isTaskDueThisWeek,createToDo,inbox,createProject, projectsMap,getProjectsMap} from './logic'




submitButton.addEventListener('click',()=>{

    
    let taskInfo = gatherTaskInfo()
    let task = createToDo(taskInfo.taskName,taskInfo.taskDescription,taskInfo.taskDate,taskInfo.prio)
    let currentContainerName = getCurrentContainer()

    
        
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
    
    drawNewProjectContainer(newProjectName)
})



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



}

function removeProject(projectName){


    hideProjects()
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



















