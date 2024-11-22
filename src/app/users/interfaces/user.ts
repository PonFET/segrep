export interface User {

    name :string;
    mail: string;
    password: string; 
}



export interface Client extends User {

    lastName: string;
    dni: number;
    address: string;
}



export interface Repairer extends User {

    lastName: string;
    dni: number;
    employeeId: number;
    companyId: number;
}



export interface Company extends User {

    companyName: string;
    CUIT: number;
    companyId: number;
}



export interface Root {

    name: string;
    password: string;
}