import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodChartComponent } from './mood-chart/mood-chart.component';

const routes: Routes = [
  {path:"mood-chart",component:MoodChartComponent},
  {path:"",redirectTo:"mood-chart",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
