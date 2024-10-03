import {Component, Input, output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {type User} from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  @Input({required : true}) user! : User;
  @Input({required : true}) selected! : boolean;

  selectedUser = output<string>();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  };

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
