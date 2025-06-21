
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-login-container">
      <div class="login-form">
        <div class="form-header">
          <h2>Admin Login</h2>
          <p>Access the school management system</p>
        </div>
        
        <form (ngSubmit)="onLogin()" #loginForm="ngForm">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              [(ngModel)]="loginData.username" 
              required
              placeholder="Enter admin username"
            >
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              [(ngModel)]="loginData.password" 
              required
              placeholder="Enter admin password"
            >
          </div>
          
          <div class="form-group checkbox-group">
            <input type="checkbox" id="remember" name="remember" [(ngModel)]="loginData.remember">
            <label for="remember">Remember me</label>
          </div>
          
          <button type="submit" class="login-btn" [disabled]="!loginForm.valid">
            {{ isLogging ? 'Signing In...' : 'Sign In' }}
          </button>
          
          <div *ngIf="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
        </form>
        
        <div class="login-info">
          <h4>Demo Credentials:</h4>
          <p><strong>Username:</strong> admin</p>
          <p><strong>Password:</strong> meritorious123</p>
          <small>These are demo credentials for testing purposes</small>
        </div>
        
        <div class="forgot-password">
          <a href="#" (click)="$event.preventDefault(); showForgotPassword()">Forgot Password?</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-login-container {
      min-height: calc(100vh - 200px);
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      margin: -2rem;
      padding: 2rem;
    }

    .login-form {
      background: white;
      border-radius: 15px;
      padding: 2.5rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      width: 100%;
      max-width: 400px;
      border: 3px solid #e9ecef;
    }

    .form-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .form-header h2 {
      color: #1e3c72;
      margin: 0 0 0.5rem 0;
      font-size: 2rem;
      font-weight: 700;
    }

    .form-header p {
      color: #666;
      margin: 0;
      font-size: 0.9rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 600;
    }

    .form-group input[type="text"],
    .form-group input[type="password"] {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    .form-group input:focus {
      outline: none;
      border-color: #2a5298;
      box-shadow: 0 0 0 3px rgba(42, 82, 152, 0.1);
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .checkbox-group input[type="checkbox"] {
      width: auto;
      margin: 0;
    }

    .checkbox-group label {
      margin: 0;
      font-weight: 400;
      cursor: pointer;
    }

    .login-btn {
      width: 100%;
      background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 1rem;
    }

    .login-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(42, 82, 152, 0.3);
    }

    .login-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    .error-message {
      background: #ffebee;
      color: #d32f2f;
      padding: 0.8rem;
      border-radius: 5px;
      border-left: 4px solid #d32f2f;
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    .login-info {
      background: #e3f2fd;
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid #1976d2;
      margin: 1.5rem 0;
    }

    .login-info h4 {
      color: #1976d2;
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
    }

    .login-info p {
      margin: 0.3rem 0;
      color: #333;
      font-size: 0.9rem;
    }

    .login-info small {
      color: #666;
      font-style: italic;
    }

    .forgot-password {
      text-align: center;
      margin-top: 1.5rem;
    }

    .forgot-password a {
      color: #2a5298;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .forgot-password a:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      .admin-login-container {
        margin: -1rem;
        padding: 1rem;
      }
      
      .login-form {
        padding: 1.5rem;
      }
    }
  `]
})
export class AdminLoginComponent {
  loginData = {
    username: '',
    password: '',
    remember: false
  };
  
  isLogging = false;
  errorMessage = '';

  constructor(private router: Router) {}

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
