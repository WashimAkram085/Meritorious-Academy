import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent {
  classes = [
    {
      number: 1,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 35,
      teacher: 'Mrs. Sharma',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 2000, admission: 0, activity: 0, total: 2000 },
      feeImageUrl: ''
    },
    {
      number: 2,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 38,
      teacher: 'Mrs. Gupta',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 2200, admission: 800, activity: 300, total: 3300 },
      feeImageUrl: ''
    },
    {
      number: 3,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 42,
      teacher: 'Mr. Singh',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 2400, admission: 800, activity: 300, total: 3500 },
      feeImageUrl: ''
    },
    {
      number: 4,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 40,
      teacher: 'Mrs. Patel',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 2600, admission: 800, activity: 400, total: 3800 },
      feeImageUrl: ''
    },
    {
      number: 5,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 45,
      teacher: 'Mr. Kumar',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 2800, admission: 800, activity: 400, total: 4000 },
      feeImageUrl: ''
    },
    {
      number: 6,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 43,
      teacher: 'Mrs. Verma',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 3000, admission: 800, activity: 400, total: 4200 },
      feeImageUrl: ''
    },
    {
      number: 7,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 41,
      teacher: 'Mr. Joshi',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 3200, admission: 800, activity: 500, total: 4500 },
      feeImageUrl: ''
    },
    {
      number: 8,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 39,
      teacher: 'Mrs. Mehta',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 3400, admission: 800, activity: 500, total: 4700 },
      feeImageUrl: ''
    },
    {
      number: 9,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 37,
      teacher: 'Mr. Agarwal',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 3600, admission: 800, activity: 500, total: 4900 },
      feeImageUrl: ''
    },
    {
      number: 10,
      subjects: 'English, Math, Physics, Chemistry, Biology, Computer',
      studentCount: 35,
      teacher: 'Mrs. Saxena',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 4000, admission: 800, activity: 600, total: 5400 },
      feeImageUrl: ''
    },
    {
      number: 11,
      subjects: 'Stream-based: Science/Commerce/Arts',
      studentCount: 32,
      teacher: 'Mr. Mishra',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 4500, admission: 800, activity: 600, total: 5900 },
      feeImageUrl: ''
    },
    {
      number: 12,
      subjects: 'Stream-based: Science/Commerce/Arts',
      studentCount: 30,
      teacher: 'Mrs. Tiwari',
      teacherPhotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
      fees: { tuition: 5000, admission: 800, activity: 600, total: 6400 },
      feeImageUrl: ''
    }
  ];
}