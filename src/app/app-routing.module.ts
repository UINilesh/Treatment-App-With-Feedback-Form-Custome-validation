import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ThankComponent } from './components/thank/thank.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { LoginComponent } from './westernUnion/login/login.component';
import { SignupComponent } from './westernUnion/signup/signup.component';
 
const routes: Routes = [
  {
    path:'',component:TreatmentsComponent
  },
  {
    path:'feedback', component:FeedbackComponent
  },
  {
    path:'thank-you',component:ThankComponent
  },
  {
    path:'login',component:LoginComponent
  },
{
    path:'signup',component:SignupComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
