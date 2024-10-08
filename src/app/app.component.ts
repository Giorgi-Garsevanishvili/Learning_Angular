import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items : WishItem[] = [
  ];

  newWishText = '';
  title = 'wishlist';
  

  addToWishList () {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item : WishItem){
    item.isCompleted = !item.isCompleted
    console.log(item)
  }
}
