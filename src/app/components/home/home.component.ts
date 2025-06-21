
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Meritorious Academy</h1>
          <p>Nurturing Excellence, Building Future Leaders</p>
          <div class="hero-stats">
            <div class="stat">
              <h3>500+</h3>
              <p>Students</p>
            </div>
            <div class="stat">
              <h3>50+</h3>
              <p>Teachers</p>
            </div>
            <div class="stat">
              <h3>12</h3>
              <p>Classes</p>
            </div>
            <div class="stat">
              <h3>15+</h3>
              <p>Years</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about">
        <h2>About Our School</h2>
        <div class="about-grid">
          <div class="about-card">
            <h3>Our Mission</h3>
            <p>To provide quality education that nurtures academic excellence, character development, and prepares students for future success.</p>
          </div>
          <div class="about-card">
            <h3>Our Vision</h3>
            <p>To be a leading educational institution that empowers students to become responsible global citizens and lifelong learners.</p>
          </div>
          <div class="about-card">
            <h3>Our Values</h3>
            <p>Excellence, Integrity, Innovation, Respect, and Community - these values guide everything we do at Meritorious Academy.</p>
          </div>
        </div>
      </section>

      <section class="principal-message">
        <h2>Message from Principal's Desk</h2>
        <div class="principal-content">
          <div class="principal-photo">
            <img src="https://via.placeholder.com/200x200/1e3c72/ffffff?text=Principal" alt="Principal Photo">
          </div>
          <div class="principal-text">
            <h3>Dr. Sunita Sharma</h3>
            <p class="designation">Principal, Meritorious Academy</p>
            <blockquote>
              "Welcome to Meritorious Academy, where we believe in nurturing not just academic excellence but also character and values. Our dedicated faculty and state-of-the-art facilities create an environment where every student can discover their potential and achieve their dreams. We are committed to providing holistic education that prepares our students for the challenges of tomorrow while instilling in them the values of integrity, compassion, and leadership."
            </blockquote>
          </div>
        </div>
      </section>

      <section class="school-gallery">
        <h2>Our School Campus</h2>
        <div class="gallery-container">
          <div class="gallery-tabs">
            <button class="tab-btn" [class.active]="activeGalleryTab === 'campus'" (click)="setActiveGalleryTab('campus')">Campus</button>
            <button class="tab-btn" [class.active]="activeGalleryTab === 'classrooms'" (click)="setActiveGalleryTab('classrooms')">Classrooms</button>
            <button class="tab-btn" [class.active]="activeGalleryTab === 'labs'" (click)="setActiveGalleryTab('labs')">Labs</button>
            <button class="tab-btn" [class.active]="activeGalleryTab === 'sports'" (click)="setActiveGalleryTab('sports')">Sports</button>
          </div>
          <div class="gallery-content">
            <div *ngIf="activeGalleryTab === 'campus'" class="gallery-grid">
              <div class="gallery-item" *ngFor="let image of campusImages">
                <img [src]="image.url" [alt]="image.caption">
                <div class="image-caption">{{ image.caption }}</div>
              </div>
            </div>
            <div *ngIf="activeGalleryTab === 'classrooms'" class="gallery-grid">
              <div class="gallery-item" *ngFor="let image of classroomImages">
                <img [src]="image.url" [alt]="image.caption">
                <div class="image-caption">{{ image.caption }}</div>
              </div>
            </div>
            <div *ngIf="activeGalleryTab === 'labs'" class="gallery-grid">
              <div class="gallery-item" *ngFor="let image of labImages">
                <img [src]="image.url" [alt]="image.caption">
                <div class="image-caption">{{ image.caption }}</div>
              </div>
            </div>
            <div *ngIf="activeGalleryTab === 'sports'" class="gallery-grid">
              <div class="gallery-item" *ngFor="let image of sportsImages">
                <img [src]="image.url" [alt]="image.caption">
                <div class="image-caption">{{ image.caption }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="school-location">
        <h2>Find Us</h2>
        <div class="location-content">
          <div class="location-info">
            <h3>School Location</h3>
            <p><strong>Address:</strong> 123 Education Street, Academic City, State - 123456</p>
            <p><strong>Phone:</strong> +91 98765 43200</p>
            <p><strong>Email:</strong> info@meritorious.edu</p>
            <div class="directions-btn">
              <button class="btn-primary">Get Directions</button>
            </div>
          </div>
          <div class="map-container">
            <div class="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7077686533134!2d77.31467431508047!3d28.61406398242615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b4e0e0e0e0%3A0x0!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="300" 
                style="border:0; border-radius: 10px;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="facilities">
        <h2>Our Facilities</h2>
        <div class="facilities-grid">
          <div class="facility">
            <h4>Modern Classrooms</h4>
            <p>Smart boards and digital learning tools</p>
          </div>
          <div class="facility">
            <h4>Science Labs</h4>
            <p>Fully equipped physics, chemistry, and biology labs</p>
          </div>
          <div class="facility">
            <h4>Library</h4>
            <p>Extensive collection of books and digital resources</p>
          </div>
          <div class="facility">
            <h4>Sports Complex</h4>
            <p>Indoor and outdoor sports facilities</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 0;
      overflow: hidden;
    }

    .hero {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), 
                  radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%);
      background-size: cover;
      background-position: center;
      color: white;
      padding: 4rem 4rem;
      margin: 0 0 2rem 0;
      text-align: center;
      position: relative;
      overflow: hidden;
      border-radius: 20px;
    }

    

    .hero-content {
      position: relative;
      z-index: 2;
    }

    .hero-content h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
      background: linear-gradient(45deg, #fff, #f0f8ff, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: titleGlow 3s ease-in-out infinite alternate, slideInDown 1s ease-out;
      text-shadow: 0 0 30px rgba(255,255,255,0.5);
    }

    @keyframes titleGlow {
      0% { filter: brightness(1); }
      100% { filter: brightness(1.2); }
    }

    @keyframes slideInDown {
      from { opacity: 0; transform: translateY(-50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero-content p {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      animation: slideInUp 1s ease-out 0.3s both;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
      animation: fadeInUp 1s ease-out 0.6s both;
    }

    .stat {
      background: rgba(255,255,255,0.15);
      padding: 2rem 1.5rem;
      border-radius: 20px;
      backdrop-filter: blur(15px);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
    }

    .stat::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.6s;
    }

    .stat:hover::before {
      left: 100%;
    }

    .stat:hover {
      transform: translateY(-10px) scale(1.05);
      background: rgba(255,255,255,0.25);
      box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    }

    .stat h3 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #ffd700;
      font-weight: 700;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      animation: countUp 2s ease-out 1s both;
    }

    @keyframes countUp {
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .stat p {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .about, .facilities {
      margin: 4rem 0;
      animation: fadeInUp 0.8s ease-out;
    }

    .about h2, .facilities h2 {
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 3rem;
      font-size: 2.8rem;
      font-weight: 700;
      position: relative;
      animation: slideInDown 0.8s ease-out;
    }

    .about h2::after, .facilities h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }

    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }

    .about-card {
      background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      border-left: 6px solid transparent;
      background-clip: padding-box;
      position: relative;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      animation: slideInLeft 0.8s ease-out;
    }

    .about-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 6px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      border-radius: 0 0 0 20px;
    }

    .about-card:hover {
      transform: translateY(-10px) rotateY(5deg);
      box-shadow: 0 20px 50px rgba(0,0,0,0.15);
    }

    .about-card h3 {
      color: #1e3c72;
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .facilities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .facility {
      background: linear-gradient(135deg, #fff 0%, #f0f8ff 100%);
      padding: 2rem;
      border-radius: 20px;
      text-align: center;
      border: 2px solid transparent;
      background-clip: padding-box;
      position: relative;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      animation: bounceIn 0.8s ease-out;
      overflow: hidden;
    }

    .facility::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, #667eea, #764ba2);
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 18px;
    }

    .facility:hover::before {
      opacity: 0.1;
    }

    .facility:hover {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
      color: #1e3c72;
    }

    .facility h4 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: #1e3c72;
      font-weight: 600;
      position: relative;
      z-index: 2;
    }

    .facility p {
      position: relative;
      z-index: 2;
      color: #666;
      line-height: 1.6;
    }

    .principal-message {
      margin: 4rem 0;
      animation: fadeInUp 0.8s ease-out;
    }

    .principal-message h2 {
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 3rem;
      font-size: 2.8rem;
      font-weight: 700;
      position: relative;
    }

    .principal-message h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }

    .principal-content {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 3rem;
      align-items: center;
      background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .principal-photo img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid #667eea;
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    }

    .principal-text h3 {
      color: #1e3c72;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .designation {
      color: #666;
      font-style: italic;
      margin-bottom: 1.5rem;
    }

    blockquote {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #333;
      font-style: italic;
      border-left: 4px solid #667eea;
      padding-left: 1.5rem;
      margin: 0;
    }

    .school-gallery {
      margin: 4rem 0;
      animation: fadeInUp 0.8s ease-out;
    }

    .school-gallery h2 {
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 3rem;
      font-size: 2.8rem;
      font-weight: 700;
      position: relative;
    }

    .school-gallery h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }

    .gallery-container {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .gallery-tabs {
      display: flex;
      background: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
    }

    .tab-btn {
      flex: 1;
      padding: 1rem 2rem;
      border: none;
      background: transparent;
      color: #666;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    }

    .tab-btn.active {
      color: #667eea;
      background: white;
    }

    .tab-btn.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #667eea, #764ba2);
    }

    .tab-btn:hover {
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
    }

    .gallery-content {
      padding: 2rem;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .gallery-item {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .gallery-item img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .image-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(transparent, rgba(0,0,0,0.7));
      color: white;
      padding: 1rem;
      font-weight: 500;
    }

    .school-location {
      margin: 4rem 0;
      animation: fadeInUp 0.8s ease-out;
    }

    .school-location h2 {
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 3rem;
      font-size: 2.8rem;
      font-weight: 700;
      position: relative;
    }

    .school-location h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }

    .location-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      align-items: start;
    }

    .location-info {
      background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .location-info h3 {
      color: #1e3c72;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .location-info p {
      margin-bottom: 1rem;
      color: #333;
      line-height: 1.6;
    }

    .directions-btn {
      margin-top: 2rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }

    .map-container {
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes bounceIn {
      0% { opacity: 0; transform: scale(0.3); }
      50% { transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2.5rem;
      }
      
      .hero-content p {
        font-size: 1.1rem;
      }
      
      .about h2, .facilities h2 {
        font-size: 2.2rem;
      }
      
      .about-grid, .facilities-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }

    .facility h4 {
      color: #1e3c72;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .hero-content h1 {
        font-size: 2rem;
      }
      
      .hero-stats {
        grid-template-columns: repeat(2, 1fr);
      }
      
      .principal-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }
      
      .location-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .gallery-tabs {
        flex-wrap: wrap;
      }
      
      .tab-btn {
        flex: 1;
        min-width: calc(50% - 1px);
        padding: 0.8rem 1rem;
      }
      
      .gallery-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
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
