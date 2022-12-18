import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { PaymentAssistanceComponent } from "./payment-assistance.component";
import { LegalPaymentsModule } from "./legal-payments/legal-payments.module";
import { CommonPaymentsModule } from "./common-payments/common-payments.module";
import { GovernmentPaymentsModule } from "./government-payments/payment-assistance.module";

@NgModule({
    declarations: [
        PaymentAssistanceComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: '', component: PaymentAssistanceComponent, children: [
                {path: 'CommonPayments', loadChildren: () => import('./common-payments/common-payments.module').then(m => m.CommonPaymentsModule)},
                {path: 'LegalPayments', loadChildren: () => import('./legal-payments/legal-payments.module').then(m => m.LegalPaymentsModule)},
                {path: 'GovernmentPayments', loadChildren: () => import('./government-payments/payment-assistance.module').then(m => m.GovernmentPaymentsModule)}
            ]},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
        LegalPaymentsModule,
        CommonPaymentsModule,
        GovernmentPaymentsModule
    ],
    exports: [
        PaymentAssistanceComponent
    ],
    providers: [
        
    ]
})
export class PaymentAssistanceModule{}