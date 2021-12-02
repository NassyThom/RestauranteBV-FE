import { DataPaged } from "./data-paged";
import { AppResponse } from "./app-response";
import { ResponseWithoutData } from "./response-without-data.model";

export class ResponseDataPaged<T> extends ResponseWithoutData implements AppResponse {
    public data: DataPaged<T>;

    constructor() {
        super();
        this.data = new DataPaged<T>();
    }
}
