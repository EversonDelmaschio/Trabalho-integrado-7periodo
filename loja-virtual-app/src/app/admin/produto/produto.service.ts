import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ServiceBase } from "../shared/service-base.service";
import { Router } from "@angular/router";


@Injectable()
export class ProdutoService extends ServiceBase {

    constructor(protected http: Http,
        protected router: Router)
    {
        super(http, router, 'produto');
    }

}