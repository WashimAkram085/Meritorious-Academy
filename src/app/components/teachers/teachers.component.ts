
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
