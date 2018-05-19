import { Injectable } from '@angular/core';
import { ServiceBase } from '../shared/service-base.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService extends ServiceBase {

    constructor(protected http: Http, protected router: Router) {
        super(http, router, 'cliente');
    }

    public login(email: string, senha: string): Observable<any> {
        return this.postAny('login', {email: email, senha: senha});
    }

    public logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    public getUserInfo() {
        return JSON.parse(localStorage.getItem('user'));
    }

    public verifyToken(): Observable<any> {
        return this.getAny('token').map(data => data.sucesso);
    }

}
