import { Routes } from '@angular/router';

export const routes: Routes = [
    // As the routes are read in order, we need to put the more specific ones first. Otherwise, the router will pick the first one that matches and not continue looking for the more specific ones.
    
    // Redirect the empty path to 'login'. This means that when the user navigates to the root of the application, they will be redirected to the login page.
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    // Load the login component when the user navigates to 'login'. This is a lazy-loaded route, which means that the component will only be loaded when the user navigates to this route. This can help improve the initial load time of the application.
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
