import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have default gallery tab as campus', () => {
        expect(component.activeGalleryTab).toBe('campus');
    });

    it('should change gallery tab when setActiveGalleryTab is called', () => {
        component.setActiveGalleryTab('classrooms');
        expect(component.activeGalleryTab).toBe('classrooms');
    });

    it('should have campus images', () => {
        expect(component.campusImages.length).toBeGreaterThan(0);
    });

    it('should have classroom images', () => {
        expect(component.classroomImages.length).toBeGreaterThan(0);
    });

    it('should have lab images', () => {
        expect(component.labImages.length).toBeGreaterThan(0);
    });

    it('should have sports images', () => {
        expect(component.sportsImages.length).toBeGreaterThan(0);
    });

    it('should render hero section', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const hero = compiled.querySelector('.hero');
        expect(hero).toBeTruthy();
    });

    it('should render about section', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const about = compiled.querySelector('.about');
        expect(about).toBeTruthy();
    });
});
