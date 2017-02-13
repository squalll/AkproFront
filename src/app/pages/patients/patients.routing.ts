import { Routes, RouterModule }  from '@angular/router';
import { PatientsComponent } from './patients.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent
  }
];

export const routing = RouterModule.forChild(routes);