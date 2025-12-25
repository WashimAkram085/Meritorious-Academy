
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeGalleryTab = 'campus';

  campusImages = [
    { url: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Main+Building', caption: 'Main School Building' },
    { url: 'https://via.placeholder.com/400x300/764ba2/ffffff?text=School+Garden', caption: 'Beautiful School Garden' },
    { url: 'https://via.placeholder.com/400x300/ff6b35/ffffff?text=Entrance+Gate', caption: 'School Entrance' },
    { url: 'https://via.placeholder.com/400x300/f7931e/ffffff?text=Playground', caption: 'School Playground' }
  ];

  classroomImages = [
    { url: 'https://via.placeholder.com/400x300/2a5298/ffffff?text=Smart+Class', caption: 'Smart Classroom' },
    { url: 'https://via.placeholder.com/400x300/1e3c72/ffffff?text=Primary+Class', caption: 'Primary Section' },
    { url: 'https://via.placeholder.com/400x300/3498db/ffffff?text=Secondary+Class', caption: 'Secondary Section' },
    { url: 'https://via.placeholder.com/400x300/2980b9/ffffff?text=Activity+Room', caption: 'Activity Room' }
  ];

  labImages = [
    { url: 'https://via.placeholder.com/400x300/e74c3c/ffffff?text=Chemistry+Lab', caption: 'Chemistry Laboratory' },
    { url: 'https://via.placeholder.com/400x300/c0392b/ffffff?text=Physics+Lab', caption: 'Physics Laboratory' },
    { url: 'https://via.placeholder.com/400x300/27ae60/ffffff?text=Biology+Lab', caption: 'Biology Laboratory' },
    { url: 'https://via.placeholder.com/400x300/16a085/ffffff?text=Computer+Lab', caption: 'Computer Laboratory' }
  ];

  sportsImages = [
    { url: 'https://via.placeholder.com/400x300/9b59b6/ffffff?text=Basketball+Court', caption: 'Basketball Court' },
    { url: 'https://via.placeholder.com/400x300/8e44ad/ffffff?text=Football+Field', caption: 'Football Field' },
    { url: 'https://via.placeholder.com/400x300/f39c12/ffffff?text=Indoor+Sports', caption: 'Indoor Sports Hall' },
    { url: 'https://via.placeholder.com/400x300/e67e22/ffffff?text=Swimming+Pool', caption: 'Swimming Pool' }
  ];

  setActiveGalleryTab(tab: string) {
    this.activeGalleryTab = tab;
  }
}
