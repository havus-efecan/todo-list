import '../src/style.css';
import { drawTask,addProjectButton} from './DOMstuff';
import {createToDo} from './logic'


 let task = createToDo("Mow the lawn", "self explanatory", "06/02/2023", "medium")

 addProjectButton.addEventListener('click', ()=>{

    drawTask(task)

})






