import { LoginRequest } from "@/types/auth";

import { SETTINGS } from "@/utils/settings";

async function login(request: LoginRequest) {
    const url = `${SETTINGS.API_BACKEND_URL}/auth/login`;
    const payload = JSON.stringify(request);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: payload
        });
        console.log(response);

    } catch (error) {
        console.error("Ocorreu um erro", error);
    }
}


export {
    login
}
