// Login

export interface LoginRequest {
    username: string,
    password: string
}

export interface LoginResponse {
    access_token: string,
    refresh_token: string
}


// Refresh Token

export interface RefreshTokenRequest {
    refresh_token: string
}

export interface RefreshTokenResponse {
    access_token: string
}
