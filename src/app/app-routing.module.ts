import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
// import { MenuComponent } from './pages/menu/menu.component';
// import { MenupageComponent } from './pages/services/services.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { TestimonyComponent } from './testimony/testimony.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'menu',component:MenuComponent},
  // {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'skills',component:SkillsComponent},
  {path:'education',component:EducationComponent},
  {path: 'testimony', component:TestimonyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
