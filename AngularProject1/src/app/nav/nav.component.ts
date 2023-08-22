import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_model/user';
import { AccountService } from '../_service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.login();
    this.logout() 
  }
  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: _ => this.router.navigateByUrl("/list"),
        error: error => console.log(error)
    })
  }
  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl("/list"),
      error: error => console.log(error)
    })
    
  }
  logout() {
    this.accountService.logout()
  }

}
