import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { NewInternacionalContracComponent } from "./new-internacional-contrac.component";

@NgModule({
    declarations: [
        NewInternacionalContracComponent
    ],
    imports: [
        RouterModule.forChild([
            {path: 'NewInternationalContract', component: NewInternacionalContracComponent },
        ]),
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        NewInternacionalContracComponent
    ],
    providers: [
        
    ]
})
export class NewInternacionalContracModule{

}