import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { BackgroundGlowComponent } from './components/background-glow/background-glow.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    EmployeesComponent,
    AboutUsComponent,
    ContactInfoComponent,
    SocialIconsComponent,
    BackgroundGlowComponent,
    ContactFormComponent,
    CookieBannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
