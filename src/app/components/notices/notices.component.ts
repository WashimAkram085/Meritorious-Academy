
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
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
