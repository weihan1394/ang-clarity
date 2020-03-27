import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'homePage', component: HomeComponent },
  { path: 'aboutPage', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
