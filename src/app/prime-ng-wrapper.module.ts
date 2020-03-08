import { NgModule } from "@angular/core";
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';

@NgModule({
  imports: [
    TreeTableModule
  ],
  exports: [
    TreeTableModule
  ]
})
export class PrimeNgWrapperModule {}
