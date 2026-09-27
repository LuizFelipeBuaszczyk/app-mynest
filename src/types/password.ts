

export interface CreatePasswordRequest {
    name: string,
    description: string,
    password: string
}

export interface ListPasswordResponse {
    data: Array<Password>
}

export interface Password {
    id: Number,
    name: string
}
