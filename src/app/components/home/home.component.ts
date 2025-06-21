
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
    }

    .hero {
      background: linear-gradient(rgba(30,60,114,0.8), rgba(42,82,152,0.8)), 
                  url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="%23f0f8ff"/></svg>');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 4rem 2rem;
      margin: -2rem -2rem 2rem -2rem;
      text-align: center;
    }

    .hero-content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .stat {
      background: rgba(255,255,255,0.1);
      padding: 1.5rem;
      border-radius: 10px;
      backdrop-filter: blur(10px);
    }

    .stat h3 {
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
      color: #ffd700;
    }

    .stat p {
      margin: 0;
      font-size: 1rem;
    }

    .about, .facilities {
      margin: 3rem 0;
    }

    .about h2, .facilities h2 {
      text-align: center;
      color: #1e3c72;
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }

    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .about-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border-left: 4px solid #2a5298;
    }

    .about-card h3 {
      color: #1e3c72;
      margin-bottom: 1rem;
    }

    .facilities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .facility {
      background: #f8f9fa;
      padding: 1.5rem;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #e9ecef;
      transition: transform 0.3s ease;
    }

    .facility:hover {
      transform: translateY(-5px);
      border-color: #2a5298;
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
    }
  `]
})
export class HomeComponent {}
