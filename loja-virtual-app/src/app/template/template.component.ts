import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();

  }

  public getUserName() {
    const user = this.loginService.getUserInfo();
    const fullName = user.nome + ' ' + user.sobrenome;
    return fullName;
  }

}
