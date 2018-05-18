import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  public logout() {
    this.loginService.logout();
  }

  public getUserName() {
    const user = this.loginService.getUserInfo();
    const fullName = user.nome + ' ' + user.sobrenome;
    return fullName;
  }

}
