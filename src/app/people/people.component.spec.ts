import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(PeopleComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have content in table ', () => {
    const table = fixture.debugElement.query(By.css('#datatable')).nativeElement;
    component.ngOnInit();
    expect(table.innerHTML).not.toBeNull();

  });

  it('should have "Loading..." in spinner', () => {
    const btn = fixture.debugElement.query(By.css('#spinner')).nativeElement;
    expect(btn.innerHTML).toContain('Loading...');
  });

  it('should open the modal window', () => {
    component.openModal('', '', '');
    const window = fixture.debugElement.query(By.css('#personModal')).nativeElement;
    expect(window).not.toBeNull();
  });

  it('should close the modal window', () => {
    component.hide();
    expect(fixture.debugElement.query(By.css('close'))).toBeNull();
  });
});
