import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringComponent } from '../components/monitoring/monitoring.component';

const routes: Routes = [
  {
    path: 'monitoring',
    component: MonitoringComponent
  }
];

@NgModule({
  declarations: [
    MonitoringComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringModule { }
