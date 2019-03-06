import { MonitoringModule } from './../app/featuremodules/monitoring/monitoring.module';

export const environment = {
    production: false,
    envName: 'monitoring',
    routes: [{ path: 'monitoring', loadChildren: '../app/featuremodules/monitoring/monitoring.module#MonitoringModule' }],
    modules: MonitoringModule
};
