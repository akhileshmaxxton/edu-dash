import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { routes } from './app.router';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
import { TestComponent } from './components/test/test.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PlansDropdownComponent } from './components/plans-dropdown/plans-dropdown.component';
import { ResoursesDropdownComponent } from './components/resourses-dropdown/resourses-dropdown.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CounselingComponent } from './components/counseling/counseling.component';
import { CounselingContentComponent } from './components/counseling-content/counseling-content.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeCardSectionComponent } from './components/home-card-section/home-card-section.component';
import { FormForContactUsComponent } from './components/form-for-contact-us/form-for-contact-us.component';
import { HeroSectionForContactUsComponent } from './components/hero-section-for-contact-us/hero-section-for-contact-us.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { UniversityPageComponent } from './pages/university-page/university-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UniServiceService } from './service/uni-service.service';
import { CarousalContactUsComponent } from './components/carousal-contact-us/carousal-contact-us.component';
import { ContactUsDetailsComponent } from './components/contact-us-details/contact-us-details.component';
import { MapComponent } from './components/map/map.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { HeroSectionofFormContactUsComponent } from './components/hero-sectionof-form-contact-us/hero-sectionof-form-contact-us.component';
import { FormSectionofFormContactUsComponent } from './components/form-sectionof-form-contact-us/form-sectionof-form-contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    ReviewsComponent,
    GallaryComponent,
    TestComponent,
    FooterComponent,
    AboutUsComponent,
    PlansDropdownComponent,
    ResoursesDropdownComponent,
    CarouselComponent,
    CounselingComponent,
    CounselingContentComponent,
    HeaderComponent,
    HomeCardSectionComponent,
    FormForContactUsComponent,
    HeroSectionForContactUsComponent,
    UniversitiesComponent,
    UniversityPageComponent,
    CarousalContactUsComponent,
    ContactUsDetailsComponent,
    MapComponent,
    ContactUsFormComponent,
    HeroSectionofFormContactUsComponent,
    FormSectionofFormContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UniServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
