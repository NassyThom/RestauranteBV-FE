export class DataPaged<T> {
    public totalRecords = 0;
    public totalPages = 0;
    public selectedPage = 1;
    public pageSize = 10;
    public content: Array<T>;

    constructor() {
        this.content = new Array<T>();
    }
}
