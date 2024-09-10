import { Component } from '@angular/core';
import { User } from 'src/app/_models';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.css']
})
export class UserDetailsComponentComponent {
  user: User | null = null;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getCurrentUserInfo().subscribe({
      next: (data) => {
        console.log('User data received:', data);
        this.user = data;
      },
      error: (err) => {
        console.error('Failed to load user details', err);
      }
    });
  }
}