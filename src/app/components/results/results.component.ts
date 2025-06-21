
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="results-container">
      <h1>Academic Results</h1>
      <p class="subtitle">Student performance and examination results</p>
      
      <div class="results-sections">
        <div class="result-card">
          <h3>Annual Examination Results 2024</h3>
          <div class="result-stats">
            <div class="stat">
              <h4>98%</h4>
              <p>Pass Percentage</p>
            </div>
            <div class="stat">
              <h4>85%</h4>
              <p>First Division</p>
            </div>
            <div class="stat">
              <h4>42</h4>
              <p>Distinction</p>
            </div>
          </div>
          <div class="achievement">
            <h4>🏆 Top Achievers</h4>
            <ul>
              <li>Aarav Sharma - Class 12 - 96.5%</li>
              <li>Priya Singh - Class 10 - 95.8%</li>
              <li>Rohit Kumar - Class 8 - 94.2%</li>
            </ul>
          </div>
        </div>

        <div class="result-card">
          <h3>Board Examination Results</h3>
          <div class="board-results">
            <div class="board-item">
              <h4>Class 10 (CBSE) - 2024</h4>
              <p>Pass Rate: 100%</p>
              <p>Average: 87.5%</p>
              <p>Students with 90%+: 28 out of 35</p>
            </div>
            <div class="board-item">
              <h4>Class 12 (CBSE) - 2024</h4>
              <p>Pass Rate: 98%</p>
              <p>Average: 84.2%</p>
              <p>Students with 90%+: 18 out of 30</p>
            </div>
          </div>
        </div>

        <div class="result-card">
          <h3>Competitive Exam Success</h3>
          <div class="competitive-results">
            <div class="comp-item">
              <h4>JEE/NEET Qualifications</h4>
              <p>JEE Advanced: 5 students</p>
              <p>JEE Main: 18 students</p>
              <p>NEET: 12 students</p>
            </div>
            <div class="comp-item">
              <h4>Scholarship Winners</h4>
              <p>National Talent Search: 3 students</p>
              <p>State Merit: 8 students</p>
              <p>District Level: 15 students</p>
            </div>
          </div>
        </div>

        <div class="result-card">
          <h3>Academic Achievements</h3>
          <div class="achievements">
            <div class="achievement-item">
              <h4>🥇 Science Olympiad</h4>
              <p>Regional Champions - 2024</p>
            </div>
            <div class="achievement-item">
              <h4>📚 Quiz Competition</h4>
              <p>State Level Winners - 2024</p>
            </div>
            <div class="achievement-item">
              <h4>🎨 Art Competition</h4>
              <p>National Level Participation</p>
            </div>
            <div class="achievement-item">
              <h4>🏃‍♂️ Sports Achievement</h4>
              <p>District Athletics Champions</p>
            </div>
          </div>
        </div>
      </div>

      <div class="download-section">
        <h3>Download Results</h3>
        <div class="download-links">
          <button class="download-btn">Class 10 Results PDF</button>
          <button class="download-btn">Class 12 Results PDF</button>
          <button class="download-btn">Annual Report 2024</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .results-container {
      padding: 1rem;
    }

    h1 {
      color: #1e3c72;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
    }

    .results-sections {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .result-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      border: 2px solid #e9ecef;
    }

    .result-card h3 {
      color: #1e3c72;
      margin-bottom: 1rem;
      text-align: center;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 0.5rem;
    }

    .result-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .stat {
      text-align: center;
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
    }

    .stat h4 {
      color: #2a5298;
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
    }

    .stat p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .achievement h4 {
      color: #1e3c72;
      margin-bottom: 0.5rem;
    }

    .achievement ul {
      list-style: none;
      padding: 0;
    }

    .achievement li {
      padding: 0.3rem 0;
      border-bottom: 1px solid #f0f0f0;
    }

    .board-results, .competitive-results, .achievements {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .board-item, .comp-item {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      border-left: 4px solid #2a5298;
    }

    .board-item h4, .comp-item h4 {
      color: #1e3c72;
      margin: 0 0 0.5rem 0;
    }

    .board-item p, .comp-item p {
      margin: 0.2rem 0;
      color: #333;
    }

    .achievements {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .achievement-item {
      background: #f8f9fa;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      border: 2px solid #e9ecef;
    }

    .achievement-item h4 {
      color: #1e3c72;
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
    }

    .achievement-item p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .download-section {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
    }

    .download-section h3 {
      color: #1e3c72;
      margin-bottom: 1rem;
    }

    .download-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .download-btn {
      background: #2a5298;
      color: white;
      border: none;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .download-btn:hover {
      background: #1e3c72;
    }

    @media (max-width: 768px) {
      .results-sections {
        grid-template-columns: 1fr;
      }
      
      .result-stats {
        grid-template-columns: 1fr;
      }
      
      .achievements {
        grid-template-columns: 1fr;
      }
      
      .download-links {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class ResultsComponent {}
