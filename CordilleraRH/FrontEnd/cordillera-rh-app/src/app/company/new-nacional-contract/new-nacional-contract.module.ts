import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { NewNacionalContractComponent } from "./new-nacional-contract.component";

@NgModule({
    declarations: [
        NewNacionalContractComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'NewNationalContract', component: NewNacionalContractComponent },
        ]),
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        NewNacionalContractComponent
    ],
    providers: [

    ]
})
export class NewNacionalContracModule{

}