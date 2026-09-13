import { SETTINGS } from "@/utils/settings";
import { storage } from "@/utils/storage";
import { StatusEnum, APIResponse } from "@/types/response";
import { useRouter } from "expo-router";

export class API {
    url: string;

    constructor() {
        this.url = SETTINGS.API_BACKEND_URL;
    }

    async request (method: string, endpoint: string, payload: object, auth: boolean): Promise<APIResponse> {
        const url = `${this.url}${endpoint}`;
        const header = {
            'Content-Type': 'application/json',
        };

        if (auth) {
            const access_token = this._get_access_token();
            header['access-token'] = access_token;
        }

        try {
            const response: Response = await fetch(url, {
                method: method, 
                body: JSON.stringify(payload),
                headers: header 
            });

            if (response.status >= 400) {
                return {
                    status: StatusEnum.ERROR,
                    payload: await response.json()
                }
            }

            return {
                status: StatusEnum.SUCCESS,
                payload: await response.json()
            }
        } catch(error) {
            console.log(error);
            return {
                status: StatusEnum.ERROR,
                payload: {
                    message: error
                }
            }
        }
    }

    _get_access_token() {
        const access_token = storage.getString('access_token');
        const router = useRouter();
        
        if (!access_token) {
            router.replace('/login'); 
        }
        return access_token;
    }
}
