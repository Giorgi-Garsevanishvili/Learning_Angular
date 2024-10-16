import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItems';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isCompleted,
  (item : WishItem) => item.isCompleted,
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  items : WishItem[] = [
  new WishItem('Learn Angular'),
  new WishItem('Get Coffee', true),
  new WishItem('Find grass that cuts itself')
  ];

  ListFilter : any ='0';

  get visibleItems() : WishItem[] {
    let value = this.ListFilter;
      return  this.items.filter(filters[this.ListFilter]);
  }

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
