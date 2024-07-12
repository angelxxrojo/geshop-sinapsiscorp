import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class CartPopupComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  productAddedMessage: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });

    this.cartService.productAddedMessage$.subscribe(message => {
      this.productAddedMessage = message;
    });
  }

  // No olvidar:  Que debe cerrar
  closePopup() {
    this.close.emit();
  }

  //aumentar o disminuir cantidad 

  incrementQuantity(itemId: number) {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      this.cartService.updateCartItemQuantity(itemId, item.quantity + 1);
    }
  }

  decrementQuantity(itemId: number) {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      this.cartService.updateCartItemQuantity(itemId, item.quantity - 1);
    }
  }

  //remover del carrito

  removeFromCart(itemId: number, event: Event) {
    event.stopPropagation(); // Detener la propagación del evento de clic
    this.cartService.removeFromCart(itemId);
  }
}
