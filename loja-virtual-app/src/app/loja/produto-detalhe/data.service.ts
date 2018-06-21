import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Produto } from '../../admin/produto/produto.model';


@Injectable()
export class DataService {
    
    private messageSource = new BehaviorSubject<Produto>(null);
    currentMessage = this.messageSource.asObservable();
    
    constructor() { }
    
    changeMessage(message: Produto){
        this.messageSource.next(message);
    }

}
