import { SETTINGS } from "@/utils/settings";
import { StatusEnum, APIResponse } from "@/types/response";

interface APIProps {
    method: string,
    endpoint: string,
    payload?: object,
    header: HeadersInit
};

export class API {
    url: string;

    constructor() {
        this.url = SETTINGS.API_BACKEND_URL;
    }

    protected async request ({method, endpoint, payload, header}: APIProps): Promise<APIResponse> {
        const url = `${this.url}${endpoint}`;

        const response: Response = await fetch(url, {
            method: method, 
            body: JSON.stringify(payload),
            headers: header 
        });

        const data = await response.json();

        if (response.status >= 400) {
            return {
                status_code: response.status,
                status: StatusEnum.ERROR,
                payload: data
            }
        }

        return {
            status_code: response.status,
            status: StatusEnum.SUCCESS,
            payload: data
        }
        
    }
}
