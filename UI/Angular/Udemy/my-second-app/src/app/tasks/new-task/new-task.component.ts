import {Component, EventEmitter, Input, Output} from '@angular/core';
import {type newTaskData} from "../task/task.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required : true }) userId! : string;
  @Output() cancelNewTask = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<newTaskData>();

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  onSubmit() {
    this.addNewTask.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    });
  }

  onCancelAddTask() {
    this.cancelNewTask.emit();
  }
}
