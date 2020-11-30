import TaskInterface from "../interfaces/TaskInterface";

function addTaskFunction(setTasks: Function, newTask: TaskInterface) {
  setTasks((prevTasks: []) => [newTask, ...prevTasks]);
}

function changeTaskCompletedFunction(tasks: [TaskInterface], setTasks: Function, taskID: number) {
  const task = tasks.findIndex((item: { taskID: number }) => item.taskID === taskID);
  let updatedTask = Array.from(tasks);
  updatedTask[task].taskIsCompleted = !updatedTask[task].taskIsCompleted;
  setTasks(updatedTask);
}

export { addTaskFunction, changeTaskCompletedFunction };
