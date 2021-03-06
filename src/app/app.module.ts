import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { WelcomeComponent } from './home/welcome.component'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { employeePipe } from './Employee/employee-filter.pipe'

import { employeeModule } from './Employee/employee.module'
import { employeeComponent } from './Employee/employee.component'
import { StarComponent } from './shared/star.component'
import { EmployeeDetailComponent } from './Employee/employee-Detail.component'
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'Employee', component: employeeComponent },
      { path: 'Employee/:id', component: EmployeeDetailComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [AppComponent, WelcomeComponent, employeeComponent, employeePipe, StarComponent, EmployeeDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
