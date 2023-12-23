import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, CommonModule, RouterLink, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss',
})
export class FoodPageComponent {
  food!: Food;
  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.food = foodService.getFoodById(params.id);
      }
    });
  }

  ngOnInit() {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
