import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SecondPartComponent } from './components/second-part/second-part.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ColorModeComponent, HeaderComponent, WelcomePageComponent, FirstPartComponent, SecondPartComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularMaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpClient],
  bootstrap: [AppComponent, FirstPartComponent],
})
export class AppModule {}
