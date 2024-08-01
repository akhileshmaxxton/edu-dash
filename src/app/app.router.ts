import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ReviewsComponent } from "./pages/reviews/reviews.component";
import { GallaryComponent } from "./pages/gallary/gallary.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { UniversityPageComponent } from "./pages/university-page/university-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'gallary', component: GallaryComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'universities', component: UniversityPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: '**', redirectTo: 'home' }
    
];

export const routes = RouterModule.forRoot(router);