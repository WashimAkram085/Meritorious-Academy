
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="notices-container">
      <h1>School Notices & Announcements</h1>
      <p class="subtitle">Important updates and information for students and parents</p>
      
      <div class="notices-grid">
        <div *ngFor="let notice of notices" class="notice-card" [class.urgent]="notice.isUrgent">
          <div class="notice-header">
            <h3>{{ notice.title }}</h3>
            <div class="notice-meta">
              <span class="date">{{ notice.date }}</span>
              <span class="category" [class]="notice.category">{{ notice.category }}</span>
            </div>
          </div>
          <div class="notice-content">
            <p>{{ notice.content }}</p>
            <div *ngIf="notice.attachment" class="attachment">
              <a href="#" class="attachment-link">📎 {{ notice.attachment }}</a>
            </div>
          </div>
          <div class="notice-footer">
            <span class="author">By: {{ notice.author }}</span>
          </div>
        </div>
      </div>

      <div class="archive-section">
        <h3>Notice Archive</h3>
        <div class="archive-filters">
          <button class="filter-btn active">All</button>
          <button class="filter-btn">Academic</button>
          <button class="filter-btn">Events</button>
          <button class="filter-btn">Administrative</button>
          <button class="filter-btn">Holidays</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .notices-container {
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

    .notices-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .notice-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border: 2px solid #e9ecef;
      transition: transform 0.3s ease;
    }

    .notice-card:hover {
      transform: translateY(-3px);
    }

    .notice-card.urgent {
      border-color: #dc3545;
      background: linear-gradient(135deg, #fff 0%, #ffe6e6 100%);
    }

    .notice-header {
      margin-bottom: 1rem;
    }

    .notice-header h3 {
      color: #1e3c72;
      margin: 0 0 0.5rem 0;
      font-size: 1.2rem;
    }

    .notice-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .date {
      color: #666;
      font-size: 0.9rem;
    }

    .category {
      padding: 0.2rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: uppercase;
    }

    .category.academic {
      background: #e3f2fd;
      color: #1976d2;
    }

    .category.events {
      background: #f3e5f5;
      color: #7b1fa2;
    }

    .category.administrative {
      background: #e8f5e8;
      color: #388e3c;
    }

    .category.holidays {
      background: #fff3e0;
      color: #f57c00;
    }

    .category.urgent {
      background: #ffebee;
      color: #d32f2f;
    }

    .notice-content {
      margin-bottom: 1rem;
    }

    .notice-content p {
      color: #333;
      line-height: 1.6;
      margin: 0;
    }

    .attachment {
      margin-top: 0.5rem;
    }

    .attachment-link {
      color: #2a5298;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .attachment-link:hover {
      text-decoration: underline;
    }

    .notice-footer {
      border-top: 1px solid #f0f0f0;
      padding-top: 0.5rem;
    }

    .author {
      color: #666;
      font-size: 0.9rem;
      font-style: italic;
    }

    .archive-section {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
    }

    .archive-section h3 {
      color: #1e3c72;
      margin-bottom: 1rem;
    }

    .archive-filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      border: 2px solid #e9ecef;
      background: white;
      color: #333;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .filter-btn:hover, .filter-btn.active {
      background: #2a5298;
      color: white;
      border-color: #2a5298;
    }

    @media (max-width: 768px) {
      .notices-grid {
        grid-template-columns: 1fr;
      }
      
      .archive-filters {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class NoticesComponent {
  notices = [
    {
      title: 'Winter Break Holiday Notice',
      content: 'School will remain closed from December 25, 2024, to January 5, 2025, for winter break. Classes will resume on January 6, 2025. Enjoy your holidays!',
      date: 'December 15, 2024',
      category: 'holidays',
      author: 'Principal Office',
      isUrgent: false,
      attachment: null
    },
    {
      title: 'Parent-Teacher Meeting',
      content: 'Quarterly Parent-Teacher meeting is scheduled for December 20, 2024, from 9:00 AM to 1:00 PM. Parents are requested to meet respective class teachers to discuss student progress.',
      date: 'December 10, 2024',
      category: 'academic',
      author: 'Academic Coordinator',
      isUrgent: true,
      attachment: 'PTM_Schedule.pdf'
    },
    {
      title: 'Annual Sports Day 2024',
      content: 'Annual Sports Day will be held on December 18, 2024, at the school ground. All students are required to participate. Parents and guardians are cordially invited to attend.',
      date: 'December 5, 2024',
      category: 'events',
      author: 'Sports Department',
      isUrgent: false,
      attachment: 'Sports_Day_Events.pdf'
    },
    {
      title: 'Fee Payment Reminder',
      content: 'Monthly fees for December 2024 are due by December 15, 2024. Late payment will incur additional charges. Please contact the accounts office for any queries.',
      date: 'December 1, 2024',
      category: 'administrative',
      author: 'Accounts Office',
      isUrgent: true,
      attachment: null
    },
    {
      title: 'Science Exhibition 2024',
      content: 'Inter-class Science Exhibition will be organized on December 22, 2024. Students from classes 6-12 can participate. Registration forms are available in the science lab.',
      date: 'November 28, 2024',
      category: 'events',
      author: 'Science Department',
      isUrgent: false,
      attachment: 'Science_Exhibition_Guidelines.pdf'
    },
    {
      title: 'New Library Books Available',
      content: 'New collection of reference books and novels has been added to the school library. Students can issue books during library hours (9 AM - 4 PM).',
      date: 'November 25, 2024',
      category: 'academic',
      author: 'Librarian',
      isUrgent: false,
      attachment: null
    }
  ];
}
