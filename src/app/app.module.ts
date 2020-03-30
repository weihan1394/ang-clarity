import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component'; 
import { FooterComponent } from './controls/footer/footer.component';
import { NavbarHeaderComponent } from './controls/navbar-header/navbar-header.component';
import { NavbarSideComponent } from './controls/navbar-side/navbar-side.component';
import { TemplateDefaultComponent } from './template/template-default/template-default.component';
import { DialogFormComponent } from './controls/dialog-form/dialog-form.component';
import { AutofocusDirective } from './directive/autofocus.directive';

import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';


@NgModule({
  declarations: [
    ContactComponent,
    RoutingComponent,
    FooterComponent,
    NavbarHeaderComponent,
    NavbarSideComponent,
    TemplateDefaultComponent,
    DialogFormComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    Bootstrap4FrameworkModule
  ],
  providers: [],
  // define the index.html component
  bootstrap: [
    TemplateDefaultComponent]
})
export class AppModule { }
