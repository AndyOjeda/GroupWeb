import { HttpClient } from "@angular/common/http";
import { Injectable, computed, signal } from "@angular/core";
import { LoginUserRequest, LoginUserResponse } from "../DTO/LoginUserDTO";
import { AuthStatus } from "./interfaces/authstatus.enum";
import { Observable, map, tap } from "rxjs";

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
            map( () => true)

            //Errores
        )
    }
}