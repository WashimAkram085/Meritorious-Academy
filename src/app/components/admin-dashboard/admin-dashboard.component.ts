
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="admin-dashboard">
      <div class="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome to Meritorious Academy Management System</p>
        <button class="logout-btn" (click)="logout()">Logout</button>
      </div>

      <div class="dashboard-tabs">
        <button 
          *ngFor="let tab of tabs" 
          class="tab-btn" 
          [class.active]="activeTab === tab.id"
          (click)="setActiveTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="dashboard-content">
        <!-- Overview Tab -->
        <div *ngIf="activeTab === 'overview'" class="tab-content">
          <h2>School Overview</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Total Students</h3>
              <p class="stat-number">487</p>
            </div>
            <div class="stat-card">
              <h3>Total Teachers</h3>
              <p class="stat-number">52</p>
            </div>
            <div class="stat-card">
              <h3>Total Classes</h3>
              <p class="stat-number">12</p>
            </div>
            <div class="stat-card">
              <h3>Total Staff</h3>
              <p class="stat-number">28</p>
            </div>
          </div>
        </div>

        <!-- Manage Teachers Tab -->
        <div *ngIf="activeTab === 'teachers'" class="tab-content">
          <h2>Manage Teachers</h2>
          
          <div class="add-teacher-form">
            <h3>Add New Teacher</h3>
            <form (ngSubmit)="addTeacher()" #teacherForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label>Name *</label>
                  <input type="text" [(ngModel)]="newTeacher.name" name="name" required>
                </div>
                <div class="form-group">
                  <label>Subject *</label>
                  <input type="text" [(ngModel)]="newTeacher.subject" name="subject" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Qualification *</label>
                  <input type="text" [(ngModel)]="newTeacher.qualification" name="qualification" required>
                </div>
                <div class="form-group">
                  <label>Experience (years) *</label>
                  <input type="number" [(ngModel)]="newTeacher.experience" name="experience" required>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>Email *</label>
                  <input type="email" [(ngModel)]="newTeacher.email" name="email" required>
                </div>
                <div class="form-group">
                  <label>Phone *</label>
                  <input type="tel" [(ngModel)]="newTeacher.phone" name="phone" required>
                </div>
              </div>
              <button type="submit" class="add-btn" [disabled]="!teacherForm.valid">Add Teacher</button>
            </form>
          </div>

          <div class="teachers-list">
            <h3>Current Teachers</h3>
            <div class="teacher-item" *ngFor="let teacher of managedTeachers">
              <div class="teacher-info">
                <h4>{{ teacher.name }}</h4>
                <p>{{ teacher.subject }} | {{ teacher.qualification }}</p>
                <p>{{ teacher.experience }} years | {{ teacher.email }}</p>
              </div>
              <button class="remove-btn" (click)="removeTeacher(teacher.id)">Remove</button>
            </div>
          </div>
        </div>

        <!-- Fee Structure Tab -->
        <div *ngIf="activeTab === 'fees'" class="tab-content">
          <h2>Manage Fee Structure</h2>
          
          <div class="fee-upload-section">
            <h3>Upload Fee Structure Images</h3>
            <div class="class-fee-grid">
              <div *ngFor="let classNum of [1,2,3,4,5,6,7,8,9,10,11,12]" class="class-fee-item">
                <h4>Class {{ classNum }}</h4>
                <input type="file" (change)="onFeeImageUpload($event, classNum)" accept="image/*">
                <div class="current-image" *ngIf="feeImages[classNum]">
                  <img [src]="feeImages[classNum]" alt="Fee structure for Class {{ classNum }}">
                  <button class="remove-image-btn" (click)="removeFeeImage(classNum)">Remove</button>
                </div>
                <div class="no-image" *ngIf="!feeImages[classNum]">
                  <p>No fee structure image uploaded</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Notices Tab -->
        <div *ngIf="activeTab === 'notices'" class="tab-content">
          <h2>Manage Notices</h2>
          
          <div class="add-notice-form">
            <h3>Add New Notice</h3>
            <form (ngSubmit)="addNotice()" #noticeForm="ngForm">
              <div class="form-group">
                <label>Title *</label>
                <input type="text" [(ngModel)]="newNotice.title" name="title" required>
              </div>
              <div class="form-group">
                <label>Category *</label>
                <select [(ngModel)]="newNotice.category" name="category" required>
                  <option value="">Select Category</option>
                  <option value="academic">Academic</option>
                  <option value="events">Events</option>
                  <option value="administrative">Administrative</option>
                  <option value="holidays">Holidays</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div class="form-group">
                <label>Content *</label>
                <textarea [(ngModel)]="newNotice.content" name="content" rows="4" required></textarea>
              </div>
              <div class="form-group checkbox-group">
                <input type="checkbox" [(ngModel)]="newNotice.isUrgent" name="isUrgent" id="urgent">
                <label for="urgent">Mark as Urgent</label>
              </div>
              <button type="submit" class="add-btn" [disabled]="!noticeForm.valid">Publish Notice</button>
            </form>
          </div>
        </div>

        <!-- Settings Tab -->
        <div *ngIf="activeTab === 'settings'" class="tab-content">
          <h2>System Settings</h2>
          
          <div class="settings-section">
            <h3>School Information</h3>
            <form>
              <div class="form-group">
                <label>School Name</label>
                <input type="text" value="Meritorious Academy" readonly>
              </div>
              <div class="form-group">
                <label>Principal Name</label>
                <input type="text" value="Dr. Rajesh Kumar" readonly>
              </div>
              <div class="form-group">
                <label>Academic Year</label>
                <input type="text" value="2024-2025" readonly>
              </div>
            </form>
          </div>

          <div class="settings-section">
            <h3>Admin Account</h3>
            <form>
              <div class="form-group">
                <label>Current Username</label>
                <input type="text" value="admin" readonly>
              </div>
              <button type="button" class="change-password-btn">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      min-height: calc(100vh - 200px);
      background: #f8f9fa;
      margin: -2rem;
      padding: 0;
    }

    .dashboard-header {
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      color: white;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .dashboard-header h1 {
      margin: 0;
      font-size: 2rem;
    }

    .dashboard-header p {
      margin: 0.5rem 0 0 0;
      opacity: 0.9;
    }

    .logout-btn {
      background: #dc3545;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 500;
    }

    .logout-btn:hover {
      background: #c82333;
    }

    .dashboard-tabs {
      background: white;
      border-bottom: 2px solid #e9ecef;
      padding: 0 2rem;
      display: flex;
      gap: 0;
      overflow-x: auto;
    }

    .tab-btn {
      background: none;
      border: none;
      padding: 1rem 2rem;
      cursor: pointer;
      font-weight: 500;
      color: #666;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .tab-btn:hover {
      color: #2a5298;
    }

    .tab-btn.active {
      color: #2a5298;
      border-bottom-color: #2a5298;
    }

    .dashboard-content {
      padding: 2rem;
    }

    .tab-content h2 {
      color: #1e3c72;
      margin-bottom: 1.5rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .stat-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
      border-left: 4px solid #2a5298;
    }

    .stat-card h3 {
      color: #666;
      margin: 0 0 1rem 0;
      font-size: 1rem;
    }

    .stat-number {
      color: #1e3c72;
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0;
    }

    .add-teacher-form, .add-notice-form {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .add-teacher-form h3, .add-notice-form h3 {
      color: #1e3c72;
      margin: 0 0 1.5rem 0;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 500;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem;
      border: 2px solid #e9ecef;
      border-radius: 5px;
      font-size: 1rem;
      box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2a5298;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .checkbox-group input {
      width: auto;
    }

    .add-btn {
      background: #28a745;
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 500;
    }

    .add-btn:hover:not(:disabled) {
      background: #218838;
    }

    .add-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .teachers-list {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .teachers-list h3 {
      color: #1e3c72;
      margin: 0 0 1.5rem 0;
    }

    .teacher-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #e9ecef;
    }

    .teacher-item:last-child {
      border-bottom: none;
    }

    .teacher-info h4 {
      margin: 0 0 0.5rem 0;
      color: #1e3c72;
    }

    .teacher-info p {
      margin: 0.2rem 0;
      color: #666;
      font-size: 0.9rem;
    }

    .remove-btn {
      background: #dc3545;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
    }

    .remove-btn:hover {
      background: #c82333;
    }

    .fee-upload-section {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .fee-upload-section h3 {
      color: #1e3c72;
      margin: 0 0 1.5rem 0;
    }

    .class-fee-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .class-fee-item {
      border: 2px solid #e9ecef;
      padding: 1rem;
      border-radius: 8px;
    }

    .class-fee-item h4 {
      color: #1e3c72;
      margin: 0 0 1rem 0;
    }

    .current-image img {
      max-width: 100%;
      max-height: 200px;
      border-radius: 5px;
      margin-bottom: 0.5rem;
    }

    .remove-image-btn {
      background: #dc3545;
      color: white;
      border: none;
      padding: 0.3rem 0.8rem;
      border-radius: 3px;
      cursor: pointer;
      font-size: 0.8rem;
    }

    .no-image {
      background: #f8f9fa;
      padding: 2rem;
      text-align: center;
      border-radius: 5px;
      color: #666;
      font-style: italic;
    }

    .settings-section {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .settings-section h3 {
      color: #1e3c72;
      margin: 0 0 1.5rem 0;
    }

    .change-password-btn {
      background: #ff6b35;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 500;
    }

    .change-password-btn:hover {
      background: #e55a2b;
    }

    @media (max-width: 768px) {
      .dashboard-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .teacher-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }
  `]
})
export class AdminDashboardComponent {
  activeTab = 'overview';
  
  tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'teachers', label: 'Manage Teachers' },
    { id: 'fees', label: 'Fee Structure' },
    { id: 'notices', label: 'Notices' },
    { id: 'settings', label: 'Settings' }
  ];

  newTeacher = {
    name: '',
    subject: '',
    qualification: '',
    experience: 0,
    email: '',
    phone: ''
  };

  newNotice = {
    title: '',
    category: '',
    content: '',
    isUrgent: false
  };

  managedTeachers = [
    { id: 1, name: 'Mrs. Priya Sharma', subject: 'Mathematics', qualification: 'M.Sc. Mathematics', experience: 8, email: 'priya@school.com' },
    { id: 2, name: 'Mr. Rajesh Kumar', subject: 'Computer Science', qualification: 'M.Tech CS', experience: 12, email: 'rajesh@school.com' }
  ];

  feeImages: { [key: number]: string } = {};

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  addTeacher() {
    const newId = Math.max(...this.managedTeachers.map(t => t.id)) + 1;
    this.managedTeachers.push({
      id: newId,
      ...this.newTeacher
    });
    
    this.newTeacher = {
      name: '',
      subject: '',
      qualification: '',
      experience: 0,
      email: '',
      phone: ''
    };
    
    alert('Teacher added successfully!');
  }

  removeTeacher(id: number) {
    if (confirm('Are you sure you want to remove this teacher?')) {
      this.managedTeachers = this.managedTeachers.filter(t => t.id !== id);
      alert('Teacher removed successfully!');
    }
  }

  onFeeImageUpload(event: any, classNum: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.feeImages[classNum] = e.target.result;
      };
      reader.readAsDataURL(file);
      alert(`Fee structure image uploaded for Class ${classNum}`);
    }
  }

  removeFeeImage(classNum: number) {
    delete this.feeImages[classNum];
    alert(`Fee structure image removed for Class ${classNum}`);
  }

  addNotice() {
    console.log('New notice:', this.newNotice);
    alert('Notice published successfully!');
    
    this.newNotice = {
      title: '',
      category: '',
      content: '',
      isUrgent: false
    };
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      alert('Logged out successfully!');
      // In a real app, you would redirect to login page
    }
  }
}
