import {Component, input} from '@angular/core';

type task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
    'Learn all the basic and advanced features of Angular & how to apply them.';
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required();
}
