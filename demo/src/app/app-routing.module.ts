import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [


  {
    path:'menu',component:MenuComponent
  },
  {
    path:'home',component:HomepageComponent
  },
  {
    path:'signup',component:RegistrationComponent
  },
  {
    path:'signin',component:LoginComponent
  },
  { 
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
