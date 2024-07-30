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
    CounselingContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
