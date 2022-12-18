import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { EmployeesSolutionsComponent } from "./employees-solutions.component";

@NgModule({
    declarations: [
        EmployeesSolutionsComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'EmployeesSolutions', component: EmployeesSolutionsComponent, children: [
                {path: 'Payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)},
            ] },
        ]),
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        EmployeesSolutionsComponent
    ],
    providers: [

    ]
})
export class EmployeeSolutionsModule{

}