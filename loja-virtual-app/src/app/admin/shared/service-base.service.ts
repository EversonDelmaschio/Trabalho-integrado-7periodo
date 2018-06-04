import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../app.config';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceBase {

    protected END_POINT_URL: string;

    constructor
    (
        protected http: Http,
        protected router: Router,
        protected tipo: string
    ) {
        this.END_POINT_URL = AppConfig.BASE_URL() + this.tipo;
    }

    public getAll(filtros?: any): Observable<any> {
        return this.http.get(this.END_POINT_URL).map(data => data.json());
    }

    public getById(id: any): Observable<any> {
        return this.http.get(this.END_POINT_URL + '/' + id).map(data => data.json());
    }

    public post(_body: any): Observable<any> {
        const body = JSON.stringify(_body);
        return this.http.post(this.END_POINT_URL, body, this.getHeaders()).map(data => data.json());
    }

    public put(id: any, obj: any): Observable<any> {
        const body = JSON.stringify(obj);
        return this.http.put(this.END_POINT_URL + '/' + id, body, this.getHeaders()).map(data => data.json());
    }

    public delete(id: any): Observable<any> {
        return this.http.delete(this.END_POINT_URL + '/' + id).map(data => data.json());
    }

    public postAny(path: string, obj: any): Observable<any> {
        const body = JSON.stringify(obj);
        return this.http.post(this.END_POINT_URL + '/' + path, body, this.getHeaders()).map(data => data.json());
    }

    public getAny(path: string): Observable<any> {
        return this.http.get(this.END_POINT_URL + '/' + path, this.getHeaders()).map(data => data.json());
    }

    public getHeaders(): RequestOptions {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        // if (includeToken && loginService.estaLogado()) {
        const token = localStorage.getItem('token');
        headers.append('Authorization', 'Bearer ' + token);
        // headers.append('Authorization', token);
        // }
        const options = new RequestOptions({headers: headers});
        return options;
    }
}
