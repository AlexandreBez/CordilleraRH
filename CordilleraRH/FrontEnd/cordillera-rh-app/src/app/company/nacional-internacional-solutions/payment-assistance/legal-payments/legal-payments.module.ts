import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { LegalPaymentsComponent } from "./legal-payments.component";
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { DeleteRegisterComponent } from './delete-register/delete-register.component';
import { BillReceiptComponent } from './bill-receipt/bill-receipt.component';

@NgModule({
    declarations: [
        LegalPaymentsComponent,
        NewPaymentComponent,
        DeleteRegisterComponent,
        BillReceiptComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'LegalPayments', component: LegalPaymentsComponent},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        LegalPaymentsComponent
    ],
    providers: [
        
    ]
})
export class LegalPaymentsModule{}