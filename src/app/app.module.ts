import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//Firebase Imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//  Service Imports
import { ClientService } from '../app/services/client.service';
import { AuthService } from '../app/services/auth.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyBWNjuhgA2XheheWiwuC0AetqthvWC17wM',
  authDomain: 'client-management-app-d84cf.firebaseapp.com',
  databaseURL: 'https://client-management-app-d84cf.firebaseio.com',
  projectId: 'client-management-app-d84cf',
  storageBucket: 'client-management-app-d84cf.appspot.com',
  messagingSenderId: '779390632005',
  appId: '1:779390632005:web:d5cd28a74c6dd6c282232c',
  measurementId: 'G-R3EMNZD3J9'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    EditClientsComponent,
    AddClientsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AngularFirestore,
    ClientService,
    AuthService,
    AngularFireAuth,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
