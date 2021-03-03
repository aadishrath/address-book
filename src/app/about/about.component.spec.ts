import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AboutComponent);
      component = fixture.componentInstance;
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the response window', () => {
    component.hide();
    expect(fixture.debugElement.query(By.css('close'))).toBeNull();
  });

  it('should open the response window', () => {
    component.showResponse();
    expect(fixture.debugElement.query(By.css('#api-response'))).not.toBeNull();
  });

  it('should have rows greater than 0 after Angular calls ngOnInit', () => {
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('#showResponse'));
    const div = fixture.debugElement.query(By.css('#api-response')).nativeElement;
    spyOn(component, 'showResponse');
    btn.triggerEventHandler('click', null);
    expect(div).toBeTruthy();
  });

  it('should click "showResponse" button', async(() => {
    fixture.detectChanges();
    let btnElement = fixture.debugElement.query(By.css('#showResponse'));

    spyOn(component, 'showResponse');
    btnElement.triggerEventHandler('click', null);
    fixture.whenStable().then(() => {
      expect(component.showResponse).toHaveBeenCalled();
    });
  }));
});
