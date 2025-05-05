import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ResidentialComponent } from './Components/residential/residential.component';
import { CommercialComponent } from './Components/commercial/commercial.component';
import { TourismComponent } from './Components/tourism/tourism.component';
import { NewsComponent } from './Components/news/news.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TermsOfServiceComponent } from './Components/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { ProjectComponent } from './Components/project/project.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'residential', component: ResidentialComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'tourism', component:TourismComponent },
  { path: 'project/:text', component: ProjectComponent },

  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsOfServiceComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
