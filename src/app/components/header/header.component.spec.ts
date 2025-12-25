import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent, RouterTestingModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct title', () => {
        expect(component.title).toBe('Meritorious Academy - School Management System');
    });

    it('should render navigation links', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const navLinks = compiled.querySelectorAll('nav a');
        expect(navLinks.length).toBeGreaterThan(0);
    });

    it('should render logo', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const logo = compiled.querySelector('.logo h1');
        expect(logo?.textContent).toContain('Meritorious Academy');
    });
});
