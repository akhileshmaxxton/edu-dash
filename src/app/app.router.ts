import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ReviewsComponent } from "./pages/reviews/reviews.component";
import { GallaryComponent } from "./pages/gallary/gallary.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { UniversityPageComponent } from "./pages/university-page/university-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { PlansComponent } from "./pages/plans/plans.component";
import { K12Component } from "./pages/k12/k12.component";
import { BlogComponent } from "./pages/blog/blog.component";

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'gallary', component: GallaryComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'universities', component: UniversityPageComponent },
    { path: 'login/register', component: RegisterPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'higher', component: PlansComponent },
    { path: 'k12', component: K12Component },
    { path: 'blog', component: BlogComponent },
    { path: '**', component: ErrorPageComponent }
    
];

export const routes = RouterModule.forRoot(router);