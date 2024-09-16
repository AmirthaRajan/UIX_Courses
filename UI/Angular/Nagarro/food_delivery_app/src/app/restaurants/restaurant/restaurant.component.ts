import { Component } from '@angular/core';
import { RESTAURANTS } from '../restaurants';

const randomIndex = Math.floor(Math.random() * RESTAURANTS.length)

@Component({
  selector: 'app-restaurant',
  standalone: true,
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent {
  selectedRestaurant = RESTAURANTS[randomIndex]

  get imagePath() {
    return "assets/restaurants/" + this.selectedRestaurant.image
  }

  onSelectRestaurant() {
    this.selectedRestaurant = RESTAURANTS[Math.floor(Math.random() * RESTAURANTS.length)]
  }
}
