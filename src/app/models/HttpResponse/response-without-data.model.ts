import { AppResponse } from "./app-response";

export class ResponseWithoutData implements AppResponse {    
    public systemCode: number;
    public systemCodeName: string;
    public showResponse: boolean;   
}
