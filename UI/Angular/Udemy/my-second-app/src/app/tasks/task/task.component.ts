import {Component, inject, Input, Output} from '@angular/core';
import {type task} from "./task.model";
import { DatePipe } from "@angular/common";
import {CardComponent} from "../../shared/card/card.component";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required : true }) task! : task;

  private tasksService = inject(TasksService);
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}

