
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
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
