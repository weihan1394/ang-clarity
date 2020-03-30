import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component'; 
import { FooterComponent } from './controls/footer/footer.component';
import { NavbarHeaderComponent } from './controls/navbar-header/navbar-header.component';
import { NavbarSideComponent } from './controls/navbar-side/navbar-side.component';
import { TemplateDefaultComponent } from './template/template-default/template-default.component';
import { DialogFormComponent } from './controls/dialog-form/dialog-form.component';

@NgModule({
  declarations: [
    ContactComponent,
    RoutingComponent,
    FooterComponent,
    NavbarHeaderComponent,
    NavbarSideComponent,
    TemplateDefaultComponent,
    DialogFormComponent
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
    TemplateDefaultComponent]
})
export class AppModule { }
