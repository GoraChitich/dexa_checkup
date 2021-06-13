export type Company = {
    id: number;
    type: string;
    dateFrom: Date;
    dateTo: Date;
    status: StatusCompany;
}

export enum StatusCompany{
    new,
    work,
    stopped,
    closed
}


export enum TypeCompany{
    cycle= "циклический тип"
}