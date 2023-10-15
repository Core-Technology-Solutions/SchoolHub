import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { AdmissionComponent } from './Component/admission/admission.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component:LogInComponent },
  { path: 'admission', component:AdmissionComponent },
  { path: 'contact', component:ContactUsComponent },
  { path: '**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
