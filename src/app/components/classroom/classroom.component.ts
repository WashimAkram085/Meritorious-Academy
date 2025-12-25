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
      fees: { tuition: 2000, admission: 0, activity: 0, total: 2000 },
      feeImageUrl: ''
    },
    {
      number: 2,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 38,
      teacher: 'Mrs. Gupta',
      fees: { tuition: 2200, admission: 800, activity: 300, total: 3300 },
      feeImageUrl: ''
    },
    {
      number: 3,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 42,
      teacher: 'Mr. Singh',
      fees: { tuition: 2400, admission: 800, activity: 300, total: 3500 },
      feeImageUrl: ''
    },
    {
      number: 4,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 40,
      teacher: 'Mrs. Patel',
      fees: { tuition: 2600, admission: 800, activity: 400, total: 3800 },
      feeImageUrl: ''
    },
    {
      number: 5,
      subjects: 'English, Math, Science, Social Studies, Hindi',
      studentCount: 45,
      teacher: 'Mr. Kumar',
      fees: { tuition: 2800, admission: 800, activity: 400, total: 4000 },
      feeImageUrl: ''
    },
    {
      number: 6,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 43,
      teacher: 'Mrs. Verma',
      fees: { tuition: 3000, admission: 800, activity: 400, total: 4200 },
      feeImageUrl: ''
    },
    {
      number: 7,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 41,
      teacher: 'Mr. Joshi',
      fees: { tuition: 3200, admission: 800, activity: 500, total: 4500 },
      feeImageUrl: ''
    },
    {
      number: 8,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 39,
      teacher: 'Mrs. Mehta',
      fees: { tuition: 3400, admission: 800, activity: 500, total: 4700 },
      feeImageUrl: ''
    },
    {
      number: 9,
      subjects: 'English, Math, Science, Social Studies, Hindi, Computer',
      studentCount: 37,
      teacher: 'Mr. Agarwal',
      fees: { tuition: 3600, admission: 800, activity: 500, total: 4900 },
      feeImageUrl: ''
    },
    {
      number: 10,
      subjects: 'English, Math, Physics, Chemistry, Biology, Computer',
      studentCount: 35,
      teacher: 'Mrs. Saxena',
      fees: { tuition: 4000, admission: 800, activity: 600, total: 5400 },
      feeImageUrl: ''
    },
    {
      number: 11,
      subjects: 'Stream-based: Science/Commerce/Arts',
      studentCount: 32,
      teacher: 'Mr. Mishra',
      fees: { tuition: 4500, admission: 800, activity: 600, total: 5900 },
      feeImageUrl: ''
    },
    {
      number: 12,
      subjects: 'Stream-based: Science/Commerce/Arts',
      studentCount: 30,
      teacher: 'Mrs. Tiwari',
      fees: { tuition: 5000, admission: 800, activity: 600, total: 6400 },
      feeImageUrl: ''
    }
  ];
}