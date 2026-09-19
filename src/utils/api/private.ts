import { storage } from "@/utils/storage";
import { UnathourizedError } from "@/types/exceptions";
import { API } from "./http";
import { APIResponse } from "@/types/response";

interface POSTProps {
    endpoint: string,
    payload?: object
}

export class PrivateAPI extends API {
    
    public async POST({endpoint, payload}: POSTProps): Promise<APIResponse> {
        const method = 'POST';
        const header = this.create_header();

        return await this.request(
            {
                method: method,
                endpoint: endpoint,
                payload: payload,
                header: header
            }
        ); 
    }
    
    private create_header() {
        return { 
            'Content-Type': 'application/json',
            'access-token': this.get_access_token(),
        };
    }

    private get_access_token() {
        const access_token = storage.getString('access_token');
        
        if (!access_token) {
            throw new UnathourizedError('token not found');
        }
        return access_token;
    }
}
