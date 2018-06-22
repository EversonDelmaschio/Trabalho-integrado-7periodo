import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ServiceBase } from "../shared/service-base.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";


@Injectable()
export class ProdutoService extends ServiceBase {

    constructor(protected http: Http,
        protected router: Router)
    {
        super(http, router, 'produto');
    }

    getExemplarCarrinho(exemplarId: number): Observable<any> {
        return this.postAny('carrinho', {exemplarId: exemplarId});
    }

}