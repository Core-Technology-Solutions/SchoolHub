import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NavComponent } from './Component/nav/nav.component';
import { AboutComponent } from './Component/about/about.component';
import { EventsComponent } from './Component/events/events.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { AdmissionComponent } from './Component/admission/admission.component';
import { HeaderComponent } from './Component/header/header.component';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { ServicesComponent } from './component/services/services.component';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    EventsComponent,
    ContactUsComponent,
    AdmissionComponent,
    HeaderComponent,
    GalleryComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    RouterLinkActive,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

