import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { FoodService } from '../../../services/food.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  constructor(private foodService: FoodService) {}
  tags: Tag[] = [];

  ngOnInit() {
    this.tags = this.foodService.getAllTags();
  }
}
