export interface LoginUserRequest {
    email:string;
    password:string;
}

export interface LoginUserResponse {
    id: number;
    email: string;
    password: string;
    name: string;
    token: string;
}