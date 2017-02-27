import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { AuthGuard } from '.././_guard/index';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => System.import('./login/login.module')
  },
 // {
 //   path: 'register',
  //  loadChildren: () => System.import('./register/register.module')
  //},
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module'), canActivate: [AuthGuard] },
       { path: 'patients',  loadChildren: () => System.import('./patients/patients.module'), canActivate: [AuthGuard]  },
      { path: 'calendar',  loadChildren: () => System.import('./calendar/calendar.module'), canActivate: [AuthGuard]  },
      { path: 'config',  loadChildren: () => System.import('./config/config.module'), canActivate: [AuthGuard]  }

      //{ path: 'editors', loadChildren: () => System.import('./editors/editors.module') },
     // { path: 'components', loadChildren: () => System.import('./components/components.module') },
      //{ path: 'charts', loadChildren: () => System.import('./charts/charts.module') },
     // { path: 'ui', loadChildren: () => System.import('./ui/ui.module') },
      //{ path: 'forms', loadChildren: () => System.import('./forms/forms.module') },
     // { path: 'tables', loadChildren: () => System.import('./tables/tables.module') },
     // { path: 'maps', loadChildren: () => System.import('./maps/maps.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
