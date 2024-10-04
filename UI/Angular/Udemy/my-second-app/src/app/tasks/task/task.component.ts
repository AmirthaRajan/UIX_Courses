import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type task} from "./task.model";
import { DatePipe } from "@angular/common";
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required : true }) task! : task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}

