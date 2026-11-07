import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // Datos de ejemplo almacenados temporalmente en memoria.
  private productos: Producto[] = [
    { id: 1, nombre: 'Laptop Gamer', precio: 1200, categoria: 'Tecnología', disponible: true },
    { id: 2, nombre: 'Teclado Mecánico', precio: 85, categoria: 'Accesorios', disponible: true },
    { id: 3, nombre: 'Monitor 4K', precio: 350, categoria: 'Tecnología', disponible: false }
  ];

  // HttpClient queda disponible para conectar una API REST en una siguiente práctica.
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]> {
    return of([...this.productos]);
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    const nuevo: Producto = { ...producto, id: this.siguienteId() };
    this.productos.push(nuevo);
    return of(nuevo);
  }

  eliminarProducto(id: number): Observable<boolean> {
    const cantidadInicial = this.productos.length;
    this.productos = this.productos.filter(producto => producto.id !== id);
    return of(this.productos.length < cantidadInicial);
  }

  private siguienteId(): number {
    return this.productos.length
      ? Math.max(...this.productos.map(producto => producto.id ?? 0)) + 1
      : 1;
  }
}