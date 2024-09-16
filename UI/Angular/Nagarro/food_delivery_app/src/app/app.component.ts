import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [HeaderComponent, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food_delivery_app';
}
