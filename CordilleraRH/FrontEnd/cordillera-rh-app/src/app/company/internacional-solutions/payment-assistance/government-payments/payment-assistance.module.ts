import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { GovernmentPaymentsComponent } from "./government-payments.component";
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { BillReceiptComponent } from './bill-receipt/bill-receipt.component';
import { DeleteRegisterComponent } from './delete-register/delete-register.component';

@NgModule({
    declarations: [
        GovernmentPaymentsComponent,
        NewPaymentComponent,
        BillReceiptComponent,
        DeleteRegisterComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'GovernmentPayments', component: GovernmentPaymentsComponent},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        GovernmentPaymentsComponent
    ],
    providers: [
        
    ]
})
export class GovernmentPaymentsModule{}