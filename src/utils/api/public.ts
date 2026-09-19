import { API } from "./http";
import { APIResponse } from "@/types/response";

interface POSTProps {
    endpoint: string,
    payload?: object
}

export class PublicAPI extends API {
    
    async POST({endpoint, payload}: POSTProps): Promise<APIResponse> {
        const method = 'POST';
        const header = this._create_header();

        return await this.request(
            {
                method: method,
                endpoint: endpoint,
                payload: payload,
                header: header
            }
        ); 
    }

    _create_header() {
        return { 
            'Content-Type': 'application/json',
        };
    }
}
