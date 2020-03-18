import { NgModule } from "@angular/core";
import { TreeTableModule } from "primeng/treetable";
import { ContextMenuModule } from "primeng/contextmenu";
import { TableModule } from "primeng/table";

@NgModule({
  imports: [TreeTableModule, ContextMenuModule, TableModule],
  exports: [TreeTableModule, ContextMenuModule, TableModule]
})
export class PrimeNgWrapperModule {}
