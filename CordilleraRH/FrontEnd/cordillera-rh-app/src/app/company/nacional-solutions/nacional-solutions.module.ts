import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NacionalSolutionsComponent } from "./nacional-solutions.component";
import { SuppliersContractsModule } from "./suppliers-contracts/suppliers-contracts.module";

@NgModule({
    declarations: [
        NacionalSolutionsComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'NacionalSolutions', component: NacionalSolutionsComponent, children: [
                {path: 'SuppliersContracts', loadChildren: () => import('./suppliers-contracts/suppliers-contracts.module').then(m => m.SuppliersContractsModule)},
                {path: 'PaymentAssistance', loadChildren: () => import('./payment-assistance/payment-assistance.module').then(m => m.PaymentAssistanceModule)},
                {path: 'BussinessInteligence', loadChildren: () => import('./bussines-intelligence/bussines-inteligence.module').then(m => m.BussinesIntelligenceModule)},
            ]},
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
        SuppliersContractsModule
    ],
    exports: [
        NacionalSolutionsComponent
    ],
    providers: [
        
    ]
})
export class NacionalSolutionsModule{

}