export enum StatusEnum {
    SUCCESS,
    ERROR
}

export interface FunctionResponse {
    status: StatusEnum,
    message: string
}

export interface APIResponse {
    status: StatusEnum,
    status_code: number,
    payload: any
}

export interface APIErrorResponse {
    detail: string
}
