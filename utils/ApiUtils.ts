import { APIRequest, APIRequestContext, APIResponse } from "@playwright/test";


export default class ApiUtils{

    readonly apiContext: APIRequestContext;
    constructor(apiContext: APIRequestContext){

        this.apiContext = apiContext;

    }
    /**
     * 
     * @param url 
     * @param payload 
     * @returns 
     */
    async createObject(url: string, payload: unknown): Promise<APIResponse>
    {
        return await this.apiContext.post(url, {
            data:payload,
                headers: {
                    "Content-Type": "application/json"
                }
            }

        ) ;
         
    }

    async getAllObjects(url:string): Promise<APIResponse>
    {
        return this.apiContext.get(url);
    }

    async geSingleObject(url:string, id:string): Promise<APIResponse>
    {
        return this.apiContext.get(`${url}/${id}`);
    }

    async updateObject(url: string, id: string, payload: unknown): Promise<APIResponse>
    {
        return await this.apiContext.put(`${url}/${id}`, {
            data:payload,
                headers: {
                    "Content-Type": "application/json"
                }
            }

        ) ;
         
    }
    async deleteObject(url:string, id: string): Promise<APIResponse>{

        return await this.apiContext.delete(`${url}/${id}`);

    }

    async creteObjectUsingKey(url:string, payload: unknown): Promise<APIResponse>{

        return this.apiContext.post(url, {
            data:payload,
            headers: {
                "content-type": "application/json",
                "x-api-key": "c281ea60-789e-416d-97ad-45c85d390874"
            }
        }

        

        );
        



    }

    async getObjectsusingApiKey(url: string): Promise<APIResponse> {

        return this.apiContext.get(url, {
            headers: {
                "x-api-key": "c281ea60-789e-416d-97ad-45c85d390874"
            }
        });

    }

    async putRequestwithApiKey(url:string, payload:unknown): Promise<APIResponse>{

            return await this.apiContext.put(url, {
                data: payload,
                headers: {
                    "content-type": "application/json",
                    "x-api-key": "c281ea60-789e-416d-97ad-45c85d390874"

                }
            });


    }

    async deleteObjectwithKey(url:string): Promise<APIResponse>{

        return await this.apiContext.delete(url, { 
            headers: {
                "x-api-key": "c281ea60-789e-416d-97ad-45c85d390874"
            }
        });
    }

}