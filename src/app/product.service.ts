import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, price: 29.99, createdAt: new Date('2024-01-15'), name: 'Klawiatura', description: 'Mechaniczna klawiatura RGB' },
    { id: 2, price: 149.00, createdAt: new Date('2024-03-22'), name: 'Mysz', description: 'Bezprzewodowa mysz optyczna' },
    { id: 3, price: 499.99, createdAt: new Date('2024-05-10'), name: 'Monitor', description: 'Monitor 27 cali 144Hz' },
    { id: 4, price: 89.50, createdAt: new Date('2024-07-01'), name: 'Słuchawki', description: 'Słuchawki nauszne z mikrofonem' },
    { id: 5, price: 19.99, createdAt: new Date('2024-09-30'), name: 'Podkładka', description: 'Duża podkładka pod mysz' },
  ];

  getAll(): Product[] {
    return [...this.products];
  }

  getById(id: number): Product | undefined {
    return { ...this.products.find(p => p.id === id) } as Product;
  }
}