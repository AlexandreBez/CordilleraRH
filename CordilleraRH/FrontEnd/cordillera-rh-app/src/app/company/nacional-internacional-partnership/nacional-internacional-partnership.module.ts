import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AddNewPartnershipComponent } from "./add-new-partnership/add-new-partnership.component";
import { ClosePartnershipComponent } from "./close-partnership/close-partnership.component";
import { EditComponent } from "./edit/edit.component";
import { NacionalInternacionalPartnershipComponent } from "./nacional-internacional-partnership.component";
import { PartnershipDetailsComponent } from "./partnership-details/partnership-details.component";
import { RemoveComponent } from "./remove/remove.component";


@NgModule({
    declarations: [
        NacionalInternacionalPartnershipComponent,
        AddNewPartnershipComponent,
        PartnershipDetailsComponent,
        ClosePartnershipComponent,
        EditComponent,
        RemoveComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'NacionalInternacionalPartnership', component: NacionalInternacionalPartnershipComponent}
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        NacionalInternacionalPartnershipComponent
    ],
    providers: [
        
    ]
})
export class InternacionalSolutionsModule{

}