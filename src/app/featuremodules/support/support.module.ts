import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportComponent } from '../components/support/support.component';

const routes: Routes = [
  {
    path: 'support',
    component: SupportComponent
  }
];

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringModule { }
