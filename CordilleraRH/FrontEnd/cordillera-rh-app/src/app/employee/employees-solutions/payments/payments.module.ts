import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { PaymentsComponent } from "./payments.component";
import { AddNewPaymentComponent } from './add-new-payment/add-new-payment.component';
import { RemoveComponent } from "./remove/remove.component";

@NgModule({
    declarations: [
        PaymentsComponent,
        AddNewPaymentComponent,
        RemoveComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: '', component: PaymentsComponent},
        ]),
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        PaymentsComponent
    ],
    providers: [

    ]
})
export class PaymentsModule{

}