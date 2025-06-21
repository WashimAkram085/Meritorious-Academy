
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="classroom-container">
      <h1>Classroom Information</h1>
      <p class="subtitle">Classes 1-12 with Fee Structure</p>
      
      <div class="classes-grid">
        <div *ngFor="let classInfo of classes" class="class-card">
          <h3>Class {{ classInfo.number }}</h3>
          <div class="class-details">
            <p><strong>Subjects:</strong> {{ classInfo.subjects }}</p>
            <p><strong>Students:</strong> {{ classInfo.studentCount }}</p>
            <p><strong>Class Teacher:</strong> {{ classInfo.teacher }}</p>
          </div>
          
          <div class="fee-structure">
            <h4>Fee Structure</h4>
            <div class="fee-item">
              <span>Tuition Fee:</span>
              <span>₹{{ classInfo.fees.tuition }}/month</span>
            </div>
            <div class="fee-item">
              <span>Transportation:</span>
              <span>₹{{ classInfo.fees.transport }}/month</span>
            </div>
            <div class="fee-item">
              <span>Activity Fee:</span>
              <span>₹{{ classInfo.fees.activity }}/month</span>
            </div>
            <div class="fee-total">
              <span>Total Monthly:</span>
              <span>₹{{ classInfo.fees.total }}/month</span>
            </div>
            
            <div class="fee-image-placeholder" *ngIf="classInfo.feeImageUrl">
              <img [src]="classInfo.feeImageUrl" alt="Fee Structure for Class {{ classInfo.number }}" />
            </div>
            <div class="fee-image-placeholder" *ngIf="!classInfo.feeImageUrl">
              <p>Fee structure image will be uploaded by admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .classroom-container {
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

    .classes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .class-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border: 2px solid #e9ecef;
      transition: transform 0.3s ease;
    }

    .class-card:hover {
      transform: translateY(-5px);
      border-color: #2a5298;
    }

    .class-card h3 {
      color: #1e3c72;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      text-align: center;
    }

    .class-details {
      margin-bottom: 1.5rem;
    }

    .class-details p {
      margin: 0.5rem 0;
      color: #333;
    }

    .fee-structure {
      border-top: 2px solid #f0f0f0;
      padding-top: 1rem;
    }

    .fee-structure h4 {
      color: #1e3c72;
      margin-bottom: 1rem;
      text-align: center;
    }

    .fee-item, .fee-total {
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
      padding: 0.3rem 0;
    }

    .fee-total {
      font-weight: bold;
      border-top: 1px solid #ddd;
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      color: #1e3c72;
    }

    .fee-image-placeholder {
      margin-top: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 5px;
      text-align: center;
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fee-image-placeholder img {
      max-width: 100%;
      max-height: 200px;
      border-radius: 5px;
    }

    .fee-image-placeholder p {
      color: #666;
      font-style: italic;
    }

    @media (max-width: 768px) {
      .classes-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ClassroomComponent {
  classes = [
    {
      number: 1,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 35,
      teacher: 'Mrs. Sharma',
      fees: { tuition: 2000, transport: 800, activity: 300, total: 3100 },
      feeImageUrl: ''
    },
    {
      number: 2,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 38,
      teacher: 'Mrs. Gupta',
      fees: { tuition: 2200, transport: 800, activity: 300, total: 3300 },
      feeImageUrl: ''
    },
    {
      number: 3,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 42,
      teacher: 'Mr. Singh',
      fees: { tuition: 2400, transport: 800, activity: 300, total: 3500 },
      feeImageUrl: ''
    },
    {
      number: 4,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 40,
      teacher: 'Mrs. Patel',
      fees: { tuition: 2600, transport: 800, activity: 400, total: 3800 },
      feeImageUrl: ''
    },
    {
      number: 5,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 45,
      teacher: 'Mr. Kumar',
      fees: { tuition: 2800, transport: 800, activity: 400, total: 4000 },
      feeImageUrl: ''
    },
    {
      number: 6,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 43,
      teacher: 'Mrs. Verma',
      fees: { tuition: 3000, transport: 800, activity: 400, total: 4200 },
      feeImageUrl: ''
    },
    {
      number: 7,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 41,
      teacher: 'Mr. Joshi',
      fees: { tuition: 3200, transport: 800, activity: 500, total: 4500 },
      feeImageUrl: ''
    },
    {
      number: 8,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 39,
      teacher: 'Mrs. Mehta',
      fees: { tuition: 3400, transport: 800, activity: 500, total: 4700 },
      feeImageUrl: ''
    },
    {
      number: 9,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 37,
      teacher: 'Mr. Agarwal',
      fees: { tuition: 3600, transport: 800, activity: 500, total: 4900 },
      feeImageUrl: ''
    },
    {
      number: 10,
      subjects: 'English, Math, Physics, Chemistry, Biology, Computer',
      studentCount: 35,
      teacher: 'Mrs. Saxena',
      fees: { tuition: 4000, transport: 800, activity: 600, total: 5400 },
      feeImageUrl: ''
    },
    {
      number: 11,
      subjects: 'Stream-based: Science/Commerce/Arts',
      studentCount: 32,
      teacher: 'Mr. Mishra',
      fees: { tuition: 4500, transport: 800, activity: 600, total: 5900 },
      feeImageUrl: ''
    },
    {
      number: 12,
      subjects: 'Stream-based: Science/Commerce/Arts',
      studentCount: 30,
      teacher: 'Mrs. Tiwari',
      fees: { tuition: 5000, transport: 800, activity: 600, total: 6400 },
      feeImageUrl: ''
    }
  ];
}
