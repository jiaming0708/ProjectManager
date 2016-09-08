import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './template/create.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { MaintainComponent } from './template/maintain.component';

const appRoutes: Routes = [
  { path: 'dashboard/:id', component: DashBoardComponent },
  { path: 'create', component: CreateComponent, },
  { path: 'maintain', component: MaintainComponent, },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });