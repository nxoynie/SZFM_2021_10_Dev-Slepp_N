import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { SecondPartComponent } from './second-part.component';

describe('SecondPartComponent', () => {
  let component: SecondPartComponent;
  let fixture: ComponentFixture<SecondPartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPartComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
