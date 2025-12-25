
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
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
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Mr. Rajesh Kumar',
      subject: 'Computer Science',
      qualification: 'M.Tech Computer Science',
      experience: 12,
      email: 'rajesh.kumar@meritorious.edu',
      phone: '+91 98765 43211',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Mrs. Sunita Gupta',
      subject: 'English Literature',
      qualification: 'M.A. English, B.Ed.',
      experience: 10,
      email: 'sunita.gupta@meritorious.edu',
      phone: '+91 98765 43212',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Dr. Anil Singh',
      subject: 'Chemistry & Biology',
      qualification: 'Ph.D. Chemistry',
      experience: 15,
      email: 'anil.singh@meritorious.edu',
      phone: '+91 98765 43213',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Mrs. Kavita Patel',
      subject: 'Social Studies & History',
      qualification: 'M.A. History, B.Ed.',
      experience: 7,
      email: 'kavita.patel@meritorious.edu',
      phone: '+91 98765 43214',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces'
    },
    {
      name: 'Mr. Deepak Verma',
      subject: 'Physical Education',
      qualification: 'M.P.Ed.',
      experience: 9,
      email: 'deepak.verma@meritorious.edu',
      phone: '+91 98765 43215',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces'
    }
  ];
}
