import { DecimalPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, DecimalPipe],
})
export class CartPage implements OnInit, OnDestroy {
  previous!: string;
  cartSub!: Subscription;
  model: any = null;
  showThankYouMessage: boolean = false; // Tracks thank-you screen visibility
  private router = inject(Router);
  public cartService = inject(CartService);

  constructor() {}

  ngOnInit() {
    this.checkUrl();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      },
    });
  }

  checkUrl() {
    const route_url = this.router.url;
    const urlParts = route_url.split('/');
    urlParts.pop(); // Remove the last segment
    this.previous = urlParts.join('/');
  }

  addQuantity(item: any) {
    this.cartService.addQuantity(item);
  }

  subtractQuantity(item: any) {
    this.cartService.subtractQuantity(item);
  }

  checkout() {
    // Show thank-you message and clear cart
    this.showThankYouMessage = true;
    setTimeout(() => {
      this.cartService.clearCart();
      this.model = null; // Clear local model
    }, 2000); // Delay for user experience
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }
}
