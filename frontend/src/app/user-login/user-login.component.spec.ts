import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() { }

  onSubmit(): void {
    this.userService.login(this.user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    // Go back
  }
}
