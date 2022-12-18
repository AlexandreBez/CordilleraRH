import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { SearchEmployeeComponent } from "./search.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { FullDetailEmployeeComponent } from "./full-detail-employee/full-detail-employee.component";
import { RemoveComponent } from "./remove/remove.component";

@NgModule({
    declarations: [
        SearchEmployeeComponent,
        EditEmployeeComponent,
        FullDetailEmployeeComponent,
        RemoveComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'SearchEmployee', component: SearchEmployeeComponent},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        SearchEmployeeComponent
    ],
    providers: [
        
    ]
})
export class SearchEmployeeModule{

}