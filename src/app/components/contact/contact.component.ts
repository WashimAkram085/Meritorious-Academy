
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <h1>Contact Information</h1>
      <p class="subtitle">Get in touch with Meritorious Academy</p>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <h3>School Address</h3>
            <div class="info-item">
              <span class="icon">📍</span>
              <div>
                <p>Meritorious Academy</p>
                <p>123 Education Street</p>
                <p>Academic City, State - 123456</p>
              </div>
            </div>
          </div>

          <div class="info-card">
            <h3>Contact Details</h3>
            <div class="info-item">
              <span class="icon">📞</span>
              <div>
                <p><strong>Phone:</strong> +91 98765 43200</p>
                <p><strong>Landline:</strong> 011-2345-6789</p>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">✉️</span>
              <div>
                <p><strong>Email:</strong> info&#64;meritorious.edu</p>
                <p><strong>Principal:</strong> principal&#64;meritorious.edu</p>
              </div>
            </div>
          </div>

          <div class="info-card">
            <h3>Office Hours</h3>
            <div class="info-item">
              <span class="icon">🕒</span>
              <div>
                <p><strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM</p>
                <p><strong>Saturday:</strong> 8:00 AM - 12:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>

          <div class="info-card">
            <h3>Department Contacts</h3>
            <div class="department-list">
              <div class="dept-item">
                <h4>Admissions Office</h4>
                <p>📞 +91 98765 43201</p>
                <p>✉️ admissions&#64;meritorious.edu</p>
              </div>
              <div class="dept-item">
                <h4>Accounts Office</h4>
                <p>📞 +91 98765 43202</p>
                <p>✉️ accounts&#64;meritorious.edu</p>
              </div>
              <div class="dept-item">
                <h4>Academic Office</h4>
                <p>📞 +91 98765 43203</p>
                <p>✉️ academic&#64;meritorious.edu</p>
              </div>
              <div class="dept-item">
                <h4>Transportation</h4>
                <p>📞 +91 98765 43204</p>
                <p>✉️ transport&#64;meritorious.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h3>Send us a Message</h3>
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject *</label>
              <select id="subject" name="subject" [(ngModel)]="formData.subject" required>
                <option value="">Select Subject</option>
                <option value="admission">Admission Inquiry</option>
                <option value="academic">Academic Query</option>
                <option value="fee">Fee Related</option>
                <option value="transport">Transportation</option>
                <option value="general">General Inquiry</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" rows="5" [(ngModel)]="formData.message" required></textarea>
            </div>
            
            <button type="submit" class="submit-btn" [disabled]="!contactForm.valid">Send Message</button>
          </form>
        </div>
      </div>

      <div class="map-section">
        <h3>Find Us on Map</h3>
        <div class="map-placeholder">
          <p>🗺️ Interactive map will be displayed here</p>
          <p>Address: 123 Education Street, Academic City, State - 123456</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 1rem;
    }

    h1 {
      color: #1e3c72;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .info-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border: 2px solid #e9ecef;
    }

    .info-card h3 {
      color: #1e3c72;
      margin: 0 0 1rem 0;
      font-size: 1.2rem;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 0.5rem;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
      margin-bottom: 1rem;
    }

    .info-item:last-child {
      margin-bottom: 0;
    }

    .icon {
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .info-item p {
      margin: 0.2rem 0;
      color: #333;
    }

    .department-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .dept-item {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid #2a5298;
    }

    .dept-item h4 {
      color: #1e3c72;
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
    }

    .dept-item p {
      margin: 0.2rem 0;
      font-size: 0.9rem;
      color: #666;
    }

    .contact-form {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border: 2px solid #e9ecef;
      height: fit-content;
    }

    .contact-form h3 {
      color: #1e3c72;
      margin: 0 0 1.5rem 0;
      text-align: center;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 0.5rem;
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
      transition: border-color 0.3s ease;
      box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2a5298;
    }

    .submit-btn {
      width: 100%;
      background: #2a5298;
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .submit-btn:hover:not(:disabled) {
      background: #1e3c72;
    }

    .submit-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .map-section {
      background: white;
      border-radius: 10px;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
    }

    .map-section h3 {
      color: #1e3c72;
      margin-bottom: 1rem;
    }

    .map-placeholder {
      background: #f8f9fa;
      border: 2px dashed #ddd;
      border-radius: 10px;
      padding: 3rem;
      color: #666;
    }

    .map-placeholder p {
      margin: 0.5rem 0;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
      
      .department-list {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.formData);
    alert('Thank you for your message! We will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
