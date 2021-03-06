import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstPartComponent } from './first-part.component';

describe('FirstPartComponent', () => {
  let component: FirstPartComponent;
  let fixture: ComponentFixture<FirstPartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPartComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
