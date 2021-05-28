import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host : {
    '[@flyInOut]' : 'true',
    'style' : 'display:block'
  },
  animations : [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish : Dish;
  dishErrMess : string;
  promotion : Promotion;
  promoErrMess : string;
  leader : Leader;
  leaderErrMess : string;


  constructor(private dishService : DishService,private promotionService : PromotionService,private leaderService : LeaderService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void 
  {
    this.dishService.getFeaturedDish().subscribe(d => this.dish = d, errorMsg => this.dishErrMess = <any>errorMsg);
    this.promotionService.getFeturedPromotion().subscribe(p => this.promotion = p, errorMsg => this.promoErrMess = <any>errorMsg);
    this.leaderService.getFeturedLeader().subscribe(l => this.leader = l, errorMsg => this.leaderErrMess = <any>errorMsg);
  }

  

}
