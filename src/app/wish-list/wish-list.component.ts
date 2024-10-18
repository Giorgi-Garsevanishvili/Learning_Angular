import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/modules/wishItems';


@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
@Input() wishes : WishItem[] = [];


  toggleItem(item : WishItem){
    item.isCompleted = !item.isCompleted
    console.log(item)
  }

}

