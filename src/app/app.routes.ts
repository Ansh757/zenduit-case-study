import { Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms';
import { CustomersComponent } from './pages/customers/customers';
import { SubmissionsComponent } from './pages/submissions/submissions';
import { HistoryComponent } from './pages/history/history';
import { ReportsComponent } from './pages/reports/reports';
import { WorkflowComponent } from './pages/workflow/workflow';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'forms',
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'customers',
        component: CustomersComponent
    },
    {
        path: 'submissions',
        component: SubmissionsComponent
    },
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'workflow',
        component: WorkflowComponent
    }
];
