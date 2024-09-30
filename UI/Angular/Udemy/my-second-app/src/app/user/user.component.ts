import {Component, computed, input, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  avatar  = input.required<string>();
  @Input({ required : true }) name!: string;

  imagePath = computed(()=> {
    return "assets/users/" + this.avatar();
  });

}
