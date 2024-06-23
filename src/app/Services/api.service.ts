import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Product, Category, Division } from '../models/model';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';
import { LoginUserRequest, LoginUserResponse } from '../DTO/LoginUserDTO';
import { CategoryPlain, ProductUser, RequestProduct } from '../DTO/productUserDTO';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //private apiUrl = 'https://groupweb-backend-jxml.onrender.com';
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  loginUser(loginUser: LoginUserRequest) {
    return this.http.post<LoginUserResponse>(`${this.apiUrl}/user/login`, loginUser)
  }

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

  getProduct(id: number): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${this.apiUrl}/product/${id}`);
  }

  getProductsByDivision(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/product/division/1`)
  }

  createProduct(product: FormData): Observable<Product> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.post<Product>(`${this.apiUrl}/product`, product, {headers});
  }

  updateProduct(id: number, product: FormData): Observable<Product> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.put<Product>(`${this.apiUrl}/product/${id}`, product, {headers});
  }

  deleteProduct(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/product/${id}`, {headers});
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

  //news
  getAllProductsByDivision(id: number){
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/product/alldivision/${id}`)
  }

  getProductsByCategory(id: number) {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/product/allcategory/${id}`)
  }

  getProductByUserId(id: number, divisionId: number): Observable<ProductUser[]>{
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/product/user/${id}/division/${divisionId}`;
    console.log(token);
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
    console.log(headers);
    console.log(id)
    return this.http.get<ProductUser[]>(url, {headers});
  }

  getCategoryByUserIdAndDivision(id: number, divId: number): Observable<CategoryPlain[]> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}/category/user/${id}/division/${divId}`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);
    return this.http.get<CategoryPlain[]>(url, {headers})
  }
}
