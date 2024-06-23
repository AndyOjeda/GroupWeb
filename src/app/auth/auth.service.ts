import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, computed, signal } from "@angular/core";
import { LoginUserRequest, LoginUserResponse } from "../DTO/LoginUserDTO";
import { AuthStatus } from "./interfaces/authstatus.enum";
import { Observable, catchError, map, of, tap, throwError } from "rxjs";
import { CheckTokenResponse } from "./interfaces/checktoken.response";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private readonly baseUrl: string = 'http://localhost:3000';

    private _currentUser = signal<LoginUserResponse|null>(null);
    private _authStatus = signal<AuthStatus>(AuthStatus.checking);

    public currentUser = computed(() => this._currentUser());
    public authStatus = computed(() => this._authStatus());

    constructor(private http: HttpClient){}

    loginUser(loginUser: LoginUserRequest) : Observable<boolean> {
      return this.http.post<LoginUserResponse>(`${this.baseUrl}/auth/login`, loginUser)
      .pipe(
          tap( (res) => {
              this._currentUser.set(res);
              this._authStatus.set(AuthStatus.isAuthenticated);
              localStorage.setItem('token', res.token);
          }),
          map( () => true),

          //Errores
          catchError(err => {
              return throwError(() => 'Invalid Credentials');
          })
        )
    }

    checkAuthStatus(): Observable<boolean> {
      const token = localStorage.getItem('token');

      if(!token) return of(false);

      const headers = new HttpHeaders()
        .set('Authorization', `Bearer ${token}`);

      return this.http.get<CheckTokenResponse>(`${this.baseUrl}/auth/check-token`, {headers})
        .pipe(
          map((res) => {
            this._currentUser.set(res);
            this._authStatus.set(AuthStatus.isAuthenticated);
            localStorage.setItem('token', res.token);
            return true;
          }),
          catchError(() => {
            this._authStatus.set(AuthStatus.notAuthenticated);
            return of(false)
          })
        );
    }
}