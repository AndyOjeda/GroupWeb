import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://127.0.0.1:5000/swagger';

  constructor(private http: HttpClient) { }

  // Métodos CRUD para Usuarios

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios`, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/usuarios`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuarios?idUsuario=${userId}`);
  }

  // Métodos CRUD para Productos

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/productos`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/productos`, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/productos`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/productos?idProducto=${productId}`);
  }

  // Métodos CRUD para Categorías

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categorias`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categorias`, category);
  }

  updateCategory(category: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/categorias`, category);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categorias?idCategoria=${categoryId}`);
  }

  // Métodos CRUD para Divisiones

  getAllDivisions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/divisiones`);
  }

  addDivision(division: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/divisiones`, division);
  }

  updateDivision(division: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/divisiones`, division);
  }

  deleteDivision(divisionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/divisiones?idDivision=${divisionId}`);
  }
}
