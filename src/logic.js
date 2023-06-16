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





