import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
    
    private messageSource = new BehaviorSubject<string>("Default Message");
    currentMessage = this.messageSource.asObservable();
    
    constructor(){} 

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
}