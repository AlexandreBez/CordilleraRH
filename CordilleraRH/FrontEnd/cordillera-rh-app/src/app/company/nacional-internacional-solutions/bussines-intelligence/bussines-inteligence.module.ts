import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { BussinesIntelligenceComponent } from "./bussines-intelligence.component";
import { DeleteRegisterComponent } from "./delete-register/delete-register.component";
import { FinishRequestComponent } from "./finish-request/finish-request.component";
import { NewBIRequestComponent } from "./new-bi-request/new-bi-request.component";
import { ReceiptDetailsComponent } from "./receipt-details/receipt-details.component";
import { UpdateRequestComponent } from './update-request/update-request.component';

@NgModule({
    declarations: [
        BussinesIntelligenceComponent,
        DeleteRegisterComponent,
        FinishRequestComponent,
        NewBIRequestComponent,
        ReceiptDetailsComponent,
        UpdateRequestComponent,
    ],
    imports: [
        RouterModule.forChild([
            {path: '', component: BussinesIntelligenceComponent},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        BussinesIntelligenceComponent
    ],
    providers: [
        
    ]
})
export class BussinesIntelligenceModule{

}