import '../src/style.css';
import { drawTask,projects,projectList,confirmProjectButton,projectNameInput,addProjectButton,drawNewProjectContainer,getProjectName,addTaskButton,modalOverlay,submitButton,gatherTaskInfo} from './DOMstuff';
import {createToDo,inbox} from './logic'




submitButton.addEventListener('click',()=>{

    
    let taskInfo = gatherTaskInfo()
    let task = createToDo(taskInfo.taskName,taskInfo.taskDescription,taskInfo.taskDate,taskInfo.prio)
    inbox.push(task)
    drawTask(task)

    modalOverlay.style.display = 'none'

})


export function addProjectEventListeners(){

    for(let i = 0; i < projectList.length;i++){
        projectList[i].addEventListener('click', ()=>{
     
    
            for(let j = 0; j < projects.children.length;j++){
                projectList[j].classList.remove('highlighted');
            }
      
            projectList[i].classList.add('highlighted');
    
    });
    }
}

addProjectEventListeners()

addProjectButton.addEventListener('click',()=>{

    getProjectName()    

})

confirmProjectButton.addEventListener('click', ()=>{
    let newProjectName = projectNameInput.value
    drawNewProjectContainer(newProjectName)
})













