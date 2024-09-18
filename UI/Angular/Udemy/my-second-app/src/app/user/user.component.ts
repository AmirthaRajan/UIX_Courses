import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUsers = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => "assets/users/" + this.selectedUsers().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUsers.avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  }
}
