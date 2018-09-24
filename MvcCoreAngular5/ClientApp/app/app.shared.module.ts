import { NgModule } from '@angular/core';
import { EmployeeService } from './services/empservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component'
import { createemployee } from './components/addemployee/AddEmployee.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        EmployeeComponent,
        createemployee,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-employee', component: EmployeeComponent },
            { path: 'register-employee', component: createemployee },
            { path: 'employee/edit/:id', component: createemployee },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [EmployeeService]
})
export class AppModuleShared {
}
