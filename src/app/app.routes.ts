import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('../app/features/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        loadComponent: () => import('../app/features/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('../app/features/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'users',
                loadComponent: () => import('../app/features/users/users.component').then(m => m.UsersComponent)
            },
            {
                path: 'sites',
                loadComponent: () => import('../app/features/sites/sites.component').then(m => m.SitesComponent)
            },
            {
                path: 'test-type',
                loadComponent: () => import('../app/features/test-type/test-type.component').then(m => m.TestTypeComponent)
            },
            {
                path: 'tests',
                loadComponent: () => import('../app/features/tests/tests.component').then(m => m.TestsComponent)
            },
        ]
    }

];
