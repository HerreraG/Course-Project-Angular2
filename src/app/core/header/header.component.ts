import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../..//recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) { }

  ngOnInit() { }

  onLogout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
