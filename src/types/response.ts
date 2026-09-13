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
    payload: object
}
