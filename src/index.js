import '../src/style.css';
import { drawTask,addProjectButton,addTaskButton,modalOverlay,submitButton,gatherTaskInfo} from './DOMstuff';
import {createToDo,inbox} from './logic'




submitButton.addEventListener('click',()=>{

    
    let taskInfo = gatherTaskInfo()
    let task = createToDo(taskInfo.taskName,taskInfo.taskDescription,taskInfo.taskDate,taskInfo.prio)
    inbox.push(task)
    drawTask(task)

    modalOverlay.style.display = 'none'

})








