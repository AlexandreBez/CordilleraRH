import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { InternacionalSolutionsComponent } from "./internacional-solutions.component";

@NgModule({
    declarations: [
      InternacionalSolutionsComponent  
    ],
    imports: [
        RouterModule.forChild([
            {path: 'InternacionalSolutions', component: InternacionalSolutionsComponent, children: [
                {path: 'SuppliersContracts', loadChildren: () => import('./suppliers-contracts/suppliers-contracts.module').then(m => m.SuppliersContractsModule)},
                {path: 'PaymentAssistance', loadChildren: () => import('./payment-assistance/payment-assistance.module').then(m => m.PaymentAssistanceModule)},
                {path: 'BussinessInteligence', loadChildren: () => import('./bussines-intelligence/bussines-inteligence.module').then(m => m.BussinesIntelligenceModule)},
            ]},
        ]),
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        InternacionalSolutionsComponent
    ],
    providers: [
        
    ]
})
export class InternacionalSolutionsModule{

}