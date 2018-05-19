import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Cliente } from '../cliente/cliente.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public senhaInvalida = false;
  public integracao = false;
  public user: Cliente = new Cliente();

  constructor(private loginService: LoginService,
    private http: Http,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {}

  login() {
    if (this.user.email && this.user.senha) {
      this.loginService.login(this.user.email, this.user.senha)
        .subscribe(auth => {
          if (auth.sucesso) {
            localStorage.setItem('token', auth.token);
            localStorage.setItem('user', auth.user);
            this.router.navigate(['admin']);
          } else {
            this.toastr.error('Login ou senha inválidos', 'Erro!');
          }
    });
    } else {
      this.toastr.error('Preencha os campos login e senha', 'Erro!');
    }
  }

}
