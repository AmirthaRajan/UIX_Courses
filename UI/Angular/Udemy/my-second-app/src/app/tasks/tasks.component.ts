import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../dummy-tasks";
import {User} from "../user/user.model";
import {NewTaskComponent} from "./new-task/new-task.component";
import {type newTaskData} from "./task/task.model";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) user!: User;
  isAddingTask : boolean = false;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

  onCompleteTask(id : string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  showNewTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCancelNewTask() {
    this.isAddingTask = false;
  }

  onAddNewTask(newTask : newTaskData) {
    this.tasks.push({
      userId: this.user.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
      id : this.tasks.length ==0 ? "t1" : "t"+ parseInt(this.tasks[this.tasks.length-1].id.substring(1))+1,
    })
    this.isAddingTask = false;
  }
}
