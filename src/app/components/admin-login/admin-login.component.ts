
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginData = {
    username: '',
    password: '',
    remember: false
  };

  isLogging = false;
  errorMessage = '';

  constructor(private router: Router) { }

  onLogin() {
    this.isLogging = true;
    this.errorMessage = '';

    // Simulate login process
    setTimeout(() => {
      if (this.loginData.username === 'admin' && this.loginData.password === 'meritorious123') {
        alert('Login successful! Welcome to Admin Dashboard');
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
      this.isLogging = false;
    }, 1500);
  }

  showForgotPassword() {
    alert('Please contact the system administrator for password reset.\nEmail: admin@meritorious.edu\nPhone: +91 98765 43200');
  }
}
