import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, CartPopupComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;
  totalPrice: number = 0;
  showCartPopup: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(() => {
      this.cartItemCount = this.cartService.getCartCount();
    });

    this.cartService.totalPrice$.subscribe(price => {
      this.totalPrice = price;
    });
  }

  toggleCartPopup(): void {
    this.showCartPopup = !this.showCartPopup;
  }

  closeCartPopup(): void {
    this.showCartPopup = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.cart-dropdown') && !target.closest('.cart-button')) {
      this.closeCartPopup();
    }
  }
}
