import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class HomePage  implements OnInit, OnDestroy {
  items: any[] = [];
  allItems: any[] = []
  query!: string;
  totalItems = 1;
  cartSub!: Subscription;
  private api = inject(ApiService);
  public cartService = inject(CartService);

  constructor() {}

  ngOnInit() {
    console.log('ngoninit homepage');
    this.getItems();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);
  
    this.query = event.detail.value.toLowerCase(); 
    this.querySearch();
  }
  

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  searchItems() {
    this.items = this.api.items.filter((item) =>
      item.name.toLowerCase().includes(this.query)
    );
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }
}
