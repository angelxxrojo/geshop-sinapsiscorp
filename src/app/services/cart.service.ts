import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>(this.getCartItemsFromLocalStorage());
  cartItems$ = this.cartItems.asObservable();
  private totalPrice = new BehaviorSubject<number>(this.getTotalPrice());
  totalPrice$ = this.totalPrice.asObservable();
  private productAddedMessage = new BehaviorSubject<string | null>(null);
  productAddedMessage$ = this.productAddedMessage.asObservable();

  addToCart(item: Omit<CartItem, 'quantity'>) {
    const items = this.cartItems.getValue();
    const existingItem = items.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ ...item, quantity: 1 });
    }

    this.cartItems.next(items);
    this.totalPrice.next(this.getTotalPrice());
    this.productAddedMessage.next('Producto agregado');
    this.saveCartItemsToLocalStorage(items);

    // Clear the message after 3 seconds
    setTimeout(() => {
      this.productAddedMessage.next(null);
    }, 3000);
  }

  removeFromCart(itemId: number) {
    let items = this.cartItems.getValue();
    items = items.filter(item => item.id !== itemId);
    this.cartItems.next(items);
    this.totalPrice.next(this.getTotalPrice());
    this.saveCartItemsToLocalStorage(items);
  }

  updateCartItemQuantity(itemId: number, quantity: number) {
    const items = this.cartItems.getValue();
    const item = items.find(i => i.id === itemId);

    if (item && quantity > 0) {
      item.quantity = quantity;
      this.cartItems.next(items);
      this.totalPrice.next(this.getTotalPrice());
      this.saveCartItemsToLocalStorage(items);
    } else if (item && quantity === 0) {
      this.removeFromCart(itemId);
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems.getValue();
  }

  getCartCount(): number {
    return this.getCartItems().reduce((count, item) => count + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.getCartItems().reduce((total, item) => total + item.price * item.quantity, 0);
  }

  private saveCartItemsToLocalStorage(items: CartItem[]) {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }

  private getCartItemsFromLocalStorage(): CartItem[] {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }
}
