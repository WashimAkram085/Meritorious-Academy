
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
      overflow: hidden;
    }

    .hero {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), 
                  radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%);
      background-size: cover;
      background-position: center;
      color: white;
      padding: 4rem 2rem;
      margin: -2rem -2rem 2rem -2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
      animation: twinkle 4s linear infinite;
    }

    @keyframes twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
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
      border: 1px solid rgba(255,255,255,0.2);
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
    }
  `]
})
export class HomeComponent {}
