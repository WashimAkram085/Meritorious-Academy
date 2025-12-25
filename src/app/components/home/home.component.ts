
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
    {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      caption: 'Main School Building'
    },
    {
      url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=600&fit=crop',
      caption: 'Beautiful School Garden'
    },
    {
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      caption: 'School Entrance'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      caption: 'School Playground'
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
      caption: 'Campus Courtyard'
    },
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      caption: 'School Library Exterior'
    }
  ];

  classroomImages = [
    {
      url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
      caption: 'Smart Classroom'
    },
    {
      url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
      caption: 'Primary Section Classroom'
    },
    {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
      caption: 'Modern Learning Space'
    },
    {
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      caption: 'Secondary Section'
    },
    {
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
      caption: 'Interactive Learning Room'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      caption: 'Activity Room'
    }
  ];

  labImages = [
    {
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
      caption: 'Chemistry Laboratory'
    },
    {
      url: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=600&fit=crop',
      caption: 'Physics Laboratory'
    },
    {
      url: 'https://images.unsplash.com/photo-1578496480157-697fc14d2e55?w=800&h=600&fit=crop',
      caption: 'Biology Laboratory'
    },
    {
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      caption: 'Computer Laboratory'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      caption: 'Science Equipment Room'
    },
    {
      url: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=800&h=600&fit=crop',
      caption: 'Research Lab'
    }
  ];

  sportsImages = [
    {
      url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
      caption: 'Basketball Court'
    },
    {
      url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      caption: 'Football Field'
    },
    {
      url: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=800&h=600&fit=crop',
      caption: 'Indoor Sports Hall'
    },
    {
      url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop',
      caption: 'Swimming Pool'
    },
    {
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      caption: 'Sports Complex'
    },
    {
      url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop',
      caption: 'Outdoor Track & Field'
    }
  ];

  setActiveGalleryTab(tab: string) {
    this.activeGalleryTab = tab;
  }
}
