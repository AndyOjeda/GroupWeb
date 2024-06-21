import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Product, Category, Division } from '../models/model';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private apiUrl = 'https://groupweb-backend-jxml.onrender.com';
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // User CRUD operations
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/user`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/user/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/user/${id}`);
  }

  // Product CRUD operations
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/product`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }

  getProductsByDivision(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/product/division/1`)
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/product`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/product/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/product/${id}`);
  }

  // Category CRUD operations
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category`);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/category/${id}`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/category`, category);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/category/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/category/${id}`);
  }

  // Division CRUD operations
  getDivisions(): Observable<Division[]> {
    return this.http.get<Division[]>(`${this.apiUrl}/division`);
  }

  getDivision(id: number): Observable<Division> {
    return this.http.get<Division>(`${this.apiUrl}/division/${id}`);
  }

  createDivision(division: Division): Observable<Division> {
    return this.http.post<Division>(`${this.apiUrl}/division`, division);
  }

  updateDivision(id: number, division: Division): Observable<Division> {
    return this.http.put<Division>(`${this.apiUrl}/division/${id}`, division);
  }

  deleteDivision(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/division/${id}`);
  }
}
