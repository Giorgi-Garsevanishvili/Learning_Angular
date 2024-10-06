import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItems';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learning Angular'),
    new WishItem('Get coffe!', true),
    new WishItem('Achive your goals!')
  ]
  title = 'wishlist';

  toggleItem(item : WishItem){
    item.isCompleted = !item.isCompleted
    console.log(item)
  }
}
