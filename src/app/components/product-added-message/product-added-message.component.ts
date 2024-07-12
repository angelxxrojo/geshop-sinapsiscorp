import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-added-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-added-message.component.html',
  styleUrls: ['./product-added-message.component.scss']
})
export class ProductAddedMessageComponent implements OnInit {
  message: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.productAddedMessage$.subscribe(message => {
      this.message = message;
    });
  }
}

// No se esta usando de momento el componente. Esto va en home como tal.
