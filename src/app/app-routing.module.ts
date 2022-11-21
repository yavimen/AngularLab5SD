import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalHistoriesComponent } from './medical-histories/medical-histories.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  {
    path:'medical-histories',
    component: MedicalHistoriesComponent 
  },
  {
    path:'home-screen',
    component: HomeScreenComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
