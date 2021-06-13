export type Company = {
    id: number;
    type: string;
    dateFrom: Date;
    dateTo: Date;
    status: StatusCompany;
    countOutputs: number;
    lengthBlock: number;

}

export enum StatusCompany{
    working,
    stopped
}


export enum TypeCompany{
    cycle= "Циклический тип"
}