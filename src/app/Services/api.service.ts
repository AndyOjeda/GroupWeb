import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'http://127.0.0.1:5000/swagger';

  constructor(private http: HttpClient) { }

  // Métodos CRUD para Usuarios

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario`, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/usuario`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuario?idUsuario=${userId}`);
  }

  // Métodos CRUD para Productos

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/producto`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/producto`, product);
  }

  addProductWithImage(product: any, image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);
    formData.append('titulo', product.titulo);
    formData.append('descripcion', product.descripcion);
    formData.append('colores', product.colores);
    formData.append('precio', product.precio);
    formData.append('idCategoria', product.idCategoria);

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.post(`${this.baseUrl}/producto`, formData, { headers: headers });
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/producto`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/producto?idProducto=${productId}`);
  }

  // Métodos CRUD para Categorías

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categoria`);
  }

  addCategory(category: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/categoria`, category);
  }

  updateCategory(category: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/categoria`, category);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/categoria?idCategoria=${categoryId}`);
  }

  // Métodos CRUD para Divisiones

  getAllDivisions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/division`);
  }

  addDivision(division: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/division`, division);
  }

  updateDivision(division: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/division`, division);
  }

  deleteDivision(divisionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/division?idDivision=${divisionId}`);
  }
}
