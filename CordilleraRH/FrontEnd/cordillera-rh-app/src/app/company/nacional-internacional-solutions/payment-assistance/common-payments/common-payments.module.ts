import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonPaymentsComponent } from "./common-payments.component";
import { BillReceiptComponent } from './bill-receipt/bill-receipt.component';
import { DeleteRegisterComponent } from './delete-register/delete-register.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';

@NgModule({
    declarations: [
        CommonPaymentsComponent,
        BillReceiptComponent,
        DeleteRegisterComponent,
        NewPaymentComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'CommonPayments', component: CommonPaymentsComponent},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        CommonPaymentsComponent
    ],
    providers: [
        
    ]
})
export class CommonPaymentsModule{}