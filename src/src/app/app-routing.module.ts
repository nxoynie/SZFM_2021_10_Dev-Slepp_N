import { FirstPartComponent } from './components/first-part/first-part.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomePageComponent
  },
  {
    path: 'part-one', component: FirstPartComponent
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
