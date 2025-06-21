
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="teachers-container">
      <h1>Our Teaching Faculty</h1>
      <p class="subtitle">Dedicated educators committed to student excellence</p>
      
      <div class="teachers-grid">
        <div *ngFor="let teacher of teachers" class="teacher-card">
          <div class="teacher-image">
            <img [src]="teacher.imageUrl" [alt]="teacher.name" />
          </div>
          <div class="teacher-info">
            <h3>{{ teacher.name }}</h3>
            <p class="subject">{{ teacher.subject }}</p>
            <p class="qualification">{{ teacher.qualification }}</p>
            <p class="experience">{{ teacher.experience }} years experience</p>
            <p class="email">{{ teacher.email }}</p>
            <p class="phone">{{ teacher.phone }}</p>
          </div>
        </div>
      </div>
      
      <div class="admin-note">
        <p><em>Note: Admin can add more teachers through the admin panel</em></p>
      </div>
    </div>
  `,
  styles: [`
    .teachers-container {
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

    .teachers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .teacher-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border: 2px solid #e9ecef;
      transition: transform 0.3s ease;
      text-align: center;
    }

    .teacher-card:hover {
      transform: translateY(-5px);
      border-color: #2a5298;
    }

    .teacher-image {
      margin-bottom: 1rem;
    }

    .teacher-image img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #2a5298;
    }

    .teacher-info h3 {
      color: #1e3c72;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    .subject {
      font-weight: bold;
      color: #2a5298;
      margin-bottom: 0.5rem;
    }

    .qualification {
      color: #666;
      margin-bottom: 0.5rem;
      font-style: italic;
    }

    .experience {
      color: #333;
      margin-bottom: 0.5rem;
    }

    .email, .phone {
      font-size: 0.9rem;
      color: #666;
      margin: 0.3rem 0;
    }

    .admin-note {
      text-align: center;
      margin-top: 2rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 5px;
      border-left: 4px solid #2a5298;
    }

    .admin-note p {
      margin: 0;
      color: #666;
    }

    @media (max-width: 768px) {
      .teachers-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TeachersComponent {
  teachers = [
    {
      name: 'Mrs. Priya Sharma',
      subject: 'Mathematics & Physics',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: 8,
      email: 'priya.sharma@meritorious.edu',
      phone: '+91 98765 43210',
      imageUrl: 'https://via.placeholder.com/100x100/2a5298/ffffff?text=PS'
    },
    {
      name: 'Mr. Rajesh Kumar',
      subject: 'Computer Science',
      qualification: 'M.Tech Computer Science',
      experience: 12,
      email: 'rajesh.kumar@meritorious.edu',
      phone: '+91 98765 43211',
      imageUrl: 'https://via.placeholder.com/100x100/2a5298/ffffff?text=RK'
    },
    {
      name: 'Mrs. Sunita Gupta',
      subject: 'English Literature',
      qualification: 'M.A. English, B.Ed.',
      experience: 10,
      email: 'sunita.gupta@meritorious.edu',
      phone: '+91 98765 43212',
      imageUrl: 'https://via.placeholder.com/100x100/2a5298/ffffff?text=SG'
    },
    {
      name: 'Dr. Anil Singh',
      subject: 'Chemistry & Biology',
      qualification: 'Ph.D. Chemistry',
      experience: 15,
      email: 'anil.singh@meritorious.edu',
      phone: '+91 98765 43213',
      imageUrl: 'https://via.placeholder.com/100x100/2a5298/ffffff?text=AS'
    },
    {
      name: 'Mrs. Kavita Patel',
      subject: 'Social Studies & History',
      qualification: 'M.A. History, B.Ed.',
      experience: 7,
      email: 'kavita.patel@meritorious.edu',
      phone: '+91 98765 43214',
      imageUrl: 'https://via.placeholder.com/100x100/2a5298/ffffff?text=KP'
    },
    {
      name: 'Mr. Deepak Verma',
      subject: 'Physical Education',
      qualification: 'M.P.Ed.',
      experience: 9,
      email: 'deepak.verma@meritorious.edu',
      phone: '+91 98765 43215',
      imageUrl: 'https://via.placeholder.com/100x100/2a5298/ffffff?text=DV'
    }
  ];
}
