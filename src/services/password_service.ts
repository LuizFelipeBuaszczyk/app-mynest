
import { PrivateAPI } from "@/utils/api/private";
import { CreatePasswordRequest } from "@/types/password";
import { refresh_token } from "./auth_service";
import { APIErrorResponse, StatusEnum } from "@/types/response";

async function create_password( password: CreatePasswordRequest) {
    const endpoint = '/passwords';
    const payload = password;

    const api = new PrivateAPI()

    let response = await api.POST(
        {
            endpoint: endpoint,
            payload: payload
        }
    )

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
        message: 'password created'
    }
}



export {
    create_password
}
