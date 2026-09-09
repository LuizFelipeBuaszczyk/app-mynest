import { CreateUserRequest } from "@/types/users";
import { FunctionResponse, StatusEnum } from "@/types/response";

import { SETTINGS } from "@/utils/settings";
import { storage } from "@/utils/storage";

async function create_user(user: CreateUserRequest): Promise<FunctionResponse> {
    const url = `${SETTINGS.API_BACKEND_URL}/users`; 
    const payload = JSON.stringify(user);
    const access_token = storage.getString('access_token');
    
    if (!access_token) { // TODO Redirect to login ?? 
     return { 
            status: StatusEnum.ERROR,
            message: 'token not found'
        }
    }

    try {
        const response = await fetch(url, {
            body: payload,
            method: 'POST',
            headers: {
                'access-token': access_token
            }
        });

        console.log(await response.json())

        
        return {
            status: StatusEnum.SUCCESS,
            message: 'user created'
        }
        

    } catch (error) {
        console.log(error);

        return { // TODO tratar as responses da API
            status: StatusEnum.ERROR,
            message: 'error'
        }
    }

}


export {
    create_user
}
