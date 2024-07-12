import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsByCategory: { [category: string]: Product[] } = {};

  customOptions = {
    items: 4,
    nav: true,
    dots: false,
    stagePadding: 20,
    navText: ['<div class=\'owl-prev\'>&#8249;</div>', '<div class=\' owl-next\'>&#8250;</div>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }

  };

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProductsGroupedByCategory().subscribe(data => {
      this.productsByCategory = data;
    });
  }

  addToCart(product: Product, event: Event) {
    event.stopPropagation();
    this.cartService.addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
  }

  viewProductDetail(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
