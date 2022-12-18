import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AddNewPartnershipComponent } from "./add-new-partnership/add-new-partnership.component";
import { ClosePartnershipComponent } from "./close-partnership/close-partnership.component";
import { EditComponent } from "./edit/edit.component";
import { InternacionalPartnershipComponent } from "./internacional-partnership.component";
import { PartnershipDetailsComponent } from "./partnership-details/partnership-details.component";
import { RemoveComponent } from "./remove/remove.component";


@NgModule({
    declarations: [
        InternacionalPartnershipComponent,
        AddNewPartnershipComponent,
        PartnershipDetailsComponent,
        ClosePartnershipComponent,
        EditComponent,
        RemoveComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'InternacionalPartnership', component: InternacionalPartnershipComponent}
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        InternacionalPartnershipComponent
    ],
    providers: [
        
    ]
})
export class InternacionalSolutionsModule{

}