import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { NewUserComponent } from './new-user/new-user.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path : '', redirectTo  :'dashboard', pathMatch : 'full'
  },
  {
    path : 'dashboard', component : DashboardComponent
  },
  // {
  //   path : 'order', component : OrderComponent
  // },
  {
    path : 'user', component : NewUserComponent
  },
  {
    path : 'statistics', component : StatisticsComponent
  },
  {
    path : 'settings', component : SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
