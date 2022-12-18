import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SearchCompanyComponent } from "./search.component";
import { FullDetailCompanyComponent } from './full-detail-company/full-detail-company.component';
import { CompanyTerminationComponent } from './company-termination/company-termination.component';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { EditCompanyComponent } from "./edit-company/edit-company.component";
import { RemoveComponent } from "./remove/remove.component";

@NgModule({
    declarations: [
        SearchCompanyComponent,
        FullDetailCompanyComponent,
        CompanyTerminationComponent,
        EditCompanyComponent,
        RemoveComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'SearchCompany', component: SearchCompanyComponent}
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        SearchCompanyComponent
    ],
    providers: [
        
    ]
})
export class SearchCompanyModule{

}