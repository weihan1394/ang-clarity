import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './controls/footer/footer.component';
import { NavbarHeaderComponent } from './controls/navbar-header/navbar-header.component';
import { NavbarSideComponent } from './controls/navbar-side/navbar-side.component';

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    NavbarHeaderComponent,
    NavbarSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  // define the index.html component
  bootstrap: [
    HomeComponent]
})
export class AppModule { }
