import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component'
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Registration',
    component: RegistrationComponent,
  },
  {
    path: 'Withdrawal',
    component: WithdrawalComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
