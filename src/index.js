import '../src/style.css';
import { drawTask,hideProjects,getCurrentContainer,cancelProjectButton,projects,projectList,confirmProjectButton,projectNameInput,addProjectButton,drawNewProjectContainer,getProjectName,addTaskButton,modalOverlay,submitButton,gatherTaskInfo} from './DOMstuff';
import {addToContainer,isTaskDueToday,isTaskDueThisWeek,createToDo,inbox,createProject, projectsMap,getProjectsMap} from './logic'




submitButton.addEventListener('click',()=>{

    
    let taskInfo = gatherTaskInfo()
    let task = createToDo(taskInfo.taskName,taskInfo.taskDescription,taskInfo.taskDate,taskInfo.prio)
    let currentContainer = getCurrentContainer()

    
        
        currentContainer = projectsMap.get(currentContainer)
        if(currentContainer === " Today" || currentContainer === " This week"){
            addToContainer(task," Inbox")

        } else {
            addToContainer(task,currentContainer)
            drawTask(task)

        }
    
    
    if(isTaskDueToday(task)){
        addToContainer(task,projectsMap.get(" Today"))
       let x = getProjectsMap()
    }

    if(isTaskDueThisWeek(task)){

        addToContainer(task,projectsMap.get(" This week"))
        let y = getProjectsMap()

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

    let arrayLength = projectArray.length

    for(let i = 0; i < arrayLength;i++){
        if(projectArray[i].title == task.title){
            projectArray.splice(i,1)
            return
        }
    }



}



















