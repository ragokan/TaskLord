import TaskInterface from "../interfaces/TaskInterface";

function addTaskFunction(setTasks: Function, newTask: TaskInterface) {
  setTasks((prevTasks: [TaskInterface]) => [newTask, ...prevTasks]);
}

function changeTaskCompletedFunction(tasks: [TaskInterface], setTasks: Function, taskID: number) {
  const task = tasks.findIndex((item: { taskID: number }) => item.taskID === taskID);
  let updatedTask = Array.from(tasks);
  updatedTask[task].taskIsCompleted = !updatedTask[task].taskIsCompleted;
  setTasks(updatedTask);
}

const deleteTaskFunction = (setTasks: Function, taskID: number) =>
  setTasks((prevTasks: [TaskInterface]) => prevTasks.filter((item: TaskInterface) => item.taskID !== taskID));

export { addTaskFunction, changeTaskCompletedFunction, deleteTaskFunction };
