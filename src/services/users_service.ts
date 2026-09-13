import { CreateUserRequest } from "@/types/users";
import { FunctionResponse, StatusEnum, APIErrorResponse } from "@/types/response";

import { API } from "@/utils/http";

async function create_user(user: CreateUserRequest): Promise<FunctionResponse> {
    const endpoint = '/users'; 
    const payload = user;
    
    const api = new API();
    const response = await api.request(
        'POST',
        endpoint,
        payload,
        true
    );

    if (response.status == StatusEnum.ERROR) {
        const payload: APIErrorResponse = response.payload;

        return {
            status: StatusEnum.ERROR,
            message: payload.detail
        }
    }
            
    return {
        status: StatusEnum.SUCCESS,
        message: 'user created'
    }
}


export {
    create_user
}
