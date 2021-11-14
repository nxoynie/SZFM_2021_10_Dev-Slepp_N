import { FirstPartComponent } from './components/first-part/first-part.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SecondPartComponent } from './components/second-part/second-part.component';
import { ThankyouPageComponent } from './components/thankyou-page/thankyou-page.component';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomePageComponent
  },
  {
    path: 'part-one', component: FirstPartComponent
  },
  {
    path: 'part-two', component: SecondPartComponent
  },
  {
    path: 'thank-you', component: ThankyouPageComponent
  },
  {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
