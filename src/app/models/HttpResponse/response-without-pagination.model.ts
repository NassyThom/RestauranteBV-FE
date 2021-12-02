import { AppResponse } from "./app-response";
import { RawData } from "./raw-data";
import { ResponseWithoutData } from "./response-without-data.model";

export class ResponseWithoutPagination<T> extends ResponseWithoutData implements AppResponse {
    public data: RawData<T>;
    constructor(){
        super();
        this.data=new RawData<T>();
    }
}
