import { CreateUserRequest } from "@/types/users";
import { FunctionResponse, StatusEnum, APIErrorResponse } from "@/types/response";

import { PrivateAPI } from "@/utils/api/private";
import { refresh_token } from "./auth_service";

async function create_user(user: CreateUserRequest): Promise<FunctionResponse> {
    const endpoint = '/users'; 
    const payload = user;
    
    const api = new PrivateAPI();
    let response = await api.POST(
        {
            endpoint: endpoint,
            payload: payload,
        }
    );

    if (response.status_code == 401) {
        const refresh_response = await refresh_token();
        
        if (refresh_response.status === StatusEnum.ERROR) {
            const payload: APIErrorResponse = response.payload;
            return {
                status: StatusEnum.ERROR,
                message: payload.detail
            }
        }

        response = await api.POST(
            {
                endpoint: endpoint,
                payload: payload,
            }
        );
    }

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
