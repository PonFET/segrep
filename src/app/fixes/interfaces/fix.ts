export interface Fix {

    fixId: number;
    companyId: number;
    employeeId: number;
    clientDni: number;
    presumedIssue: string;
    finalIssue: string;
    comment: string;
}



export interface FixStep {

    fixId: number;
    stepId: number; //fixId + number
    picPath: string;
    stepTitle: string;
    stepComment: string;
    stepStatus: string; //Flags. There're many, most common being "In course". Others: "Pending Repairer assignation", "Pending Client authorization", etc.
    stepMailed: boolean; //In case of, for example, requiring Client approval, this flags whether the mail has been sent or nah.
    stepApproved: boolean; //In the case of requiered Client approval, this flag indicates if the client APPROVED the step in his account, allowing further action.
}