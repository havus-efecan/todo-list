let inbox,today,thisWeek,projects = []




const toDoFactory = (title,description,dueDate,priority) => {

    let toDoItem = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
      };

    return {toDoItem}
}

const projectFactory = () => {

    let project = {
        
        todoItems : [],
        itemCount : 0,

        addItemToProject : function(toDoItem){
            this.todoItems.push(toDoItem)
            this.itemCount++
        }

        
      };

      return {project}
}




export function createToDo(title,description,dueDate,priority){
    let newToDo = toDoFactory(title,description,dueDate,priority).toDoItem
    return newToDo
}

function addExistingToDo(toDo,container){
    container.push(toDo)
}



function createProject(title){
    let newProject = projectFactory(title)
    return newProject
}
