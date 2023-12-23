import { Component, OnInit, inject } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    NgFor,
    RouterLink,
    StarRatingComponent,
    CommonModule,
    SearchComponent,
    TagsComponent,
    NotFoundComponent,
  ],
})
export class HomeComponent {
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
  foods: Food[] = [];

  ngOnInit(): void {}
}
