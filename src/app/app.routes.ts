import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardEstudianteComponent } from './pages/dashboard-estudiante/dashboard-estudiante.component';
import { DashboardProfesoresComponent } from './pages/dashboard-profesores/dashboard-profesores.component';
import { autenticaGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
    path:'estudiante',
    component:DashboardEstudianteComponent,
    canActivate:[autenticaGuard]
    },
    {
        path:'profesor',
        component:DashboardProfesoresComponent,
        canActivate:[autenticaGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];