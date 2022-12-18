import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { NewEmployeeComponent } from "./new-employee.component";

@NgModule({
    declarations: [
        NewEmployeeComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'NewEmployee', component: NewEmployeeComponent },
        ]),
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        NewEmployeeComponent
    ],
    providers: [

    ]
})
export class NewEmployeeModule{

}