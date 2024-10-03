import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, DUMMY_TASKS],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) user: any;

  tasks = DUMMY_TASKS;

}
