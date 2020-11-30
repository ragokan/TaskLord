import TaskInterface from "../interfaces/TaskInterface";

function addTaskFunction(setTasks: any, newTask: TaskInterface) {
  setTasks((prevTasks: []) => [newTask, ...prevTasks]);
}

export { addTaskFunction };
