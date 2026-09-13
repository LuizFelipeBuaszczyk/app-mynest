import { LoginRequest, LoginResponse } from "@/types/auth";
import { FunctionResponse, StatusEnum } from "@/types/response";
import { API } from "@/utils/http";

import { storage } from "@/utils/storage";

async function login(request: LoginRequest): Promise<FunctionResponse> {
    const payload = request;
    
    const api = new API();

    const response = await api.request(
        'POST',
        '/auth/login',
        payload,
        false
    );

    if (response.status == StatusEnum.ERROR) {
        return {
            status: StatusEnum.ERROR,
            message: 'Ocorreu um erro' // TODO Tratar melhor isso, pode ser 401, 400, ou erro interno
        }
    }; 

    const data: LoginResponse = response.payload;
    storage.set('access_token', data.access_token);
    storage.set('refresh_token', data.refresh_token);

    return {
        status: StatusEnum.SUCCESS,
        message: 'successful login'
    }
}


export {
    login
}
