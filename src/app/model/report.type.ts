import { Form } from "@angular/forms";

export interface Report {
    id: number,
    title: string, 
    created: Date,
    modified: Date, 
    owner: string,
    from: string,
};  
