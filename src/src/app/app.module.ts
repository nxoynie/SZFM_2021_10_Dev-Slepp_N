import { FirstPartComponent } from './components/first-part/first-part.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ColorModeComponent } from './components/color-mode/color-mode.component';
import { AngularMaterialModule } from './material-module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThankyouPageComponent } from './components/thankyou-page/thankyou-page.component';

@NgModule({
  declarations: [AppComponent, ColorModeComponent, HeaderComponent, WelcomePageComponent, FirstPartComponent, ThankyouPageComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularMaterialModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
