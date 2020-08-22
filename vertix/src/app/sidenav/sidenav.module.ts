import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { TypeComponent } from './type/type.component';
import { SidenavRoutingModule } from '../sidenav/sidenav.routing';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [SidenavComponent, TypeComponent],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MaterialModule,
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
