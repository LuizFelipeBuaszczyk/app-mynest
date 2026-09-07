import { LoginRequest, LoginResponse } from "@/types/auth";
import { FunctionResponse, StatusEnum } from "@/types/response";

import { SETTINGS } from "@/utils/settings";
import { storage } from "@/utils/storage";

async function login(request: LoginRequest): Promise<FunctionResponse> {
    const url = `${SETTINGS.API_BACKEND_URL}/auth/login`;
    const payload = JSON.stringify(request);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: payload
        });
        
        const data: LoginResponse = await response.json();
        storage.set('access_token', data.access_token);
        storage.set('refresh_token', data.refresh_token);

        return {
            status: StatusEnum.SUCCESS,
            message: 'successful login'
        }

    } catch (error) {
        console.error("Ocorreu um erro", error);
        return {
            status: StatusEnum.ERROR,
            message: 'Ocorreu um erro' // TODO Tratar melhor isso, pode ser 401, 400, ou erro interno
        }
    }
}


export {
    login
}
