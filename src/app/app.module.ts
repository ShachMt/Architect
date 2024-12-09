import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentialComponent } from './Components/residential/residential.component';
import { CommercialComponent } from './Components/commercial/commercial.component';
import { TourismComponent } from './Components/tourism/tourism.component';
import { NewsComponent } from './Components/news/news.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './Components/terms-of-service/terms-of-service.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ResidentialComponent,
    CommercialComponent,
    TourismComponent,
    NewsComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    TermsOfServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
