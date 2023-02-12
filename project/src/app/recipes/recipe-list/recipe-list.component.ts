import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie5HbTLeHB_mjFYq-zi8txbUnfbw_X0ELnKNZ_GXOkv9zkXdzqgD0vhVfSlyXKKzAi_ufowCso27c8seqpgHoPwgB4t0wlLwyWx7CmYEFHQSaFBunwCQPPv1aVOOxcz4y5YT-YbVU-9S6tC4Te6sIiYcPMGWrTJpd4AwPDLsNEBOch0LzriPw6dcKQpA/s2048/Aloo-samosa-receipe-4.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie5HbTLeHB_mjFYq-zi8txbUnfbw_X0ELnKNZ_GXOkv9zkXdzqgD0vhVfSlyXKKzAi_ufowCso27c8seqpgHoPwgB4t0wlLwyWx7CmYEFHQSaFBunwCQPPv1aVOOxcz4y5YT-YbVU-9S6tC4Te6sIiYcPMGWrTJpd4AwPDLsNEBOch0LzriPw6dcKQpA/s2048/Aloo-samosa-receipe-4.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie5HbTLeHB_mjFYq-zi8txbUnfbw_X0ELnKNZ_GXOkv9zkXdzqgD0vhVfSlyXKKzAi_ufowCso27c8seqpgHoPwgB4t0wlLwyWx7CmYEFHQSaFBunwCQPPv1aVOOxcz4y5YT-YbVU-9S6tC4Te6sIiYcPMGWrTJpd4AwPDLsNEBOch0LzriPw6dcKQpA/s2048/Aloo-samosa-receipe-4.jpg'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
