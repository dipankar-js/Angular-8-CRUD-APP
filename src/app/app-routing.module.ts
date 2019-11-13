import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-clients', component: AddClientsComponent },
  { path: 'client/:id', component: ClientDetailsComponent },
  { path: 'edit-client/:id', component: EditClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
