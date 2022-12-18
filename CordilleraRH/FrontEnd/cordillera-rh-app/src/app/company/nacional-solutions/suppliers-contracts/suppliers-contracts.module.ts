import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { SuppliersContractsComponent } from "./suppliers-contracts.component";
import { SuppliersDetailsComponent } from "./suppliers-details/suppliers-details.component";
import { RemoveComponent } from "./remove/remove.component";
import { RenewComponent } from "./renew/renew.component";
import { NewSupplierComponent } from "./new-supplier/new-supplier.component";
import { EditComponent } from "./edit/edit.component";
import { EndContractComponent } from './end-contract/end-contract.component';

@NgModule({
    declarations: [
        SuppliersContractsComponent,
        SuppliersDetailsComponent,
        RemoveComponent,
        RenewComponent,
        NewSupplierComponent,
        EditComponent,
        EndContractComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: '', component: SuppliersContractsComponent},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        SuppliersContractsComponent
    ],
    providers: [
        
    ]
})
export class SuppliersContractsModule{

}