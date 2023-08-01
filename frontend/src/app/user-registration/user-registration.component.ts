import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() { }

  onSubmit(): void {
    this.userService.register(this.user)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    // Go back
  }
}
