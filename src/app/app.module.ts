import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicalHistoriesComponent } from './medical-histories/medical-histories.component';
import { ShowMedicalHistoriesComponent } from './medical-histories/show-medical-histories/show-medical-histories.component';
import { AddEditMedicalHistoriesComponent } from './medical-histories/add-edit-medical-histories/add-edit-medical-histories.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeScreenComponent } from './home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalHistoriesComponent,
    ShowMedicalHistoriesComponent,
    AddEditMedicalHistoriesComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
