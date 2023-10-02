import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

