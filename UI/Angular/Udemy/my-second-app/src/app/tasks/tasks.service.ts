import {DUMMY_TASKS} from "../dummy-tasks";
import {type NewTaskData} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class TasksService {
  tasks = DUMMY_TASKS;

  getUserTasks(userId : string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData : NewTaskData, userId : string) {
    this.tasks.push({
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      id : this.tasks.length ==0 ? "t1" : "t"+ parseInt(this.tasks[this.tasks.length-1].id.substring(1))+1,
    })
  }

  removeTask(taskId : string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

}
