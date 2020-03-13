import { NgModule } from "@angular/core";
import {TreeTableModule} from "primeng/treetable";
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  imports: [
    TreeTableModule,
    ContextMenuModule
  ],
  exports: [
    TreeTableModule,
    ContextMenuModule
  ]
})
export class PrimeNgWrapperModule {}
