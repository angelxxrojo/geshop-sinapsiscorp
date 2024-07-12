import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddedMessageComponent } from './product-added-message.component';

describe('ProductAddedMessageComponent', () => {
  let component: ProductAddedMessageComponent;
  let fixture: ComponentFixture<ProductAddedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAddedMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
