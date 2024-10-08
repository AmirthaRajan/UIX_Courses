import {DUMMY_TASKS} from "../dummy-tasks";
import {type NewTaskData, task} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class TasksService {
  tasks = DUMMY_TASKS;

 constructor() {
  const tasks = localStorage.getItem("tasks");

  if(tasks) {
    this.tasks = JSON.parse(tasks);
  }
 }

  getUserTasks(userId : string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData : NewTaskData, userId : string) {
    this.tasks.push({
      id : this.tasks.length ==0 ? "t1" : "t"+ parseInt(this.tasks[this.tasks.length-1].id.substring(1))+1,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.saveTasks(this.tasks);
  }

  removeTask(taskId : string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks(this.tasks);
  }

  private saveTasks(tasks : task[]) {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

}
