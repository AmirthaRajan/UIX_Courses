import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users =  DUMMY_USERS;
  user? : {
    id : string;
    name : string;
    avatar : string;
  };

  selectedUser(id: string) {
    this.user = this.users.find((user) => user.id === id)
  }
}
