import { AppComponent } from './../app/app.component';
export const environment = {
    production: false,
    envName: 'support',
    routes: [
        { path: '', component: AppComponent, pathMatch: 'full' },
        { path: 'monitoring', loadChildren: '../app/featuremodules/support/support.module#SupportModule' }
    ]
};
