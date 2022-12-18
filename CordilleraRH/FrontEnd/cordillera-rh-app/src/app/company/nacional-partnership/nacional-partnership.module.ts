import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NacionalPartnershipComponent } from "./nacional-partnership.component";
import { AddNewPartnershipComponent } from './add-new-partnership/add-new-partnership.component';
import { PartnershipDetailsComponent } from './partnership-details/partnership-details.component';
import { ClosePartnershipComponent } from './close-partnership/close-partnership.component';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
    declarations: [
        NacionalPartnershipComponent,
        AddNewPartnershipComponent,
        PartnershipDetailsComponent,
        ClosePartnershipComponent,
        EditComponent,
        RemoveComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'NacionalPartnership', component: NacionalPartnershipComponent}
        ]),
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        NacionalPartnershipComponent
    ],
    providers: [
        
    ]
})
export class NacionalSolutionsModule{

}