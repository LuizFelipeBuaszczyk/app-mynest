import { LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from "@/types/auth";
import { UnathourizedError } from "@/types/exceptions";
import { FunctionResponse, StatusEnum } from "@/types/response";
import { PublicAPI } from "@/utils/api/public";

import { storage } from "@/utils/storage";

async function login(request: LoginRequest): Promise<FunctionResponse> {
    const payload = request;
    
    const api = new PublicAPI();

    const response = await api.POST(
        {
            endpoint: '/auth/login',
            payload:payload
        },
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

async function refresh_token(): Promise<FunctionResponse> {
    const refresh_token = storage.getString('refresh_token');
    if (!refresh_token) {
        throw new UnathourizedError("refresh token not exists");
    }

    const payload: RefreshTokenRequest = {
        refresh_token: refresh_token,
    };

    const api = new PublicAPI();

    const response = await api.POST(
        {
            endpoint: '/auth/refresh-token',
            payload: payload
        }
    );

    if (response.status == StatusEnum.ERROR) {
        return {
            status: StatusEnum.ERROR,
            message: 'Ocorreu um erro' // TODO Tratar melhor isso, pode ser 401, 400, ou erro interno
        }
    };

    const data: RefreshTokenResponse = response.payload;
    storage.set('access_token', data.access_token); 

    return {
        status: StatusEnum.SUCCESS,
        message: 'token refreshed'
    }
}

export {
    login,
    refresh_token
}
