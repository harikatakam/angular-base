import { NgModule } from "@angular/core";
import { TreeTableModule } from "primeng/treetable";
import { ContextMenuModule } from "primeng/contextmenu";
import { TableModule } from "primeng/table";
import { DynamicDialogModule, DialogService } from "primeng/dynamicdialog";

@NgModule({
  imports: [
    TreeTableModule,
    ContextMenuModule,
    TableModule,
    DynamicDialogModule
  ],
  exports: [
    TreeTableModule,
    ContextMenuModule,
    TableModule,
    DynamicDialogModule
  ],
  providers: [DialogService]
})
export class PrimeNgWrapperModule {}
