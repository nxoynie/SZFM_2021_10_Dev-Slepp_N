import { AngularMaterialModule } from './../../material-module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { WelcomePageComponent } from './welcome-page.component';
import { Router } from '@angular/router';

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePageComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientModule, AngularMaterialModule],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate and other stuff if F1', function(done) {
    spyOn(component, 'goNext').and.callThrough()
    component.welcome = true
    fixture.detectChanges()
    let f1btn = fixture.debugElement.query(By.css('#f1'));
    let nextbtn = fixture.debugElement.query(By.css('#next'));
    f1btn.triggerEventHandler('click', {})
    fixture.detectChanges()
    nextbtn.triggerEventHandler('click', {})
    fixture.detectChanges()
    expect(component.goNext).toHaveBeenCalled()
    expect(component.welcome).toEqual(false)
    setTimeout(function() {
      expect(mockRouter.navigate).toHaveBeenCalledWith([ '/part-one' ], Object({ replaceUrl: true }))
      done();
    }, 3100);
  });

  it('should navigate and other stuff if BTC ', function(done) {
    spyOn(component, 'goNext').and.callThrough()
    component.welcome = true
    fixture.detectChanges()
    let f1btn = fixture.debugElement.query(By.css('#btc'));
    let nextbtn = fixture.debugElement.query(By.css('#next'));
    f1btn.triggerEventHandler('click', {})
    fixture.detectChanges()
    nextbtn.triggerEventHandler('click', {})
    fixture.detectChanges()
    expect(component.goNext).toHaveBeenCalled()
    expect(component.welcome).toEqual(false)
    setTimeout(function() {
      expect(mockRouter.navigate).toHaveBeenCalledWith([ '/part-one' ], Object({ replaceUrl: true }))
      done();
    }, 3100);
  });
});
