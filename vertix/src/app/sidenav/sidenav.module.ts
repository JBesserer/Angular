import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { NeutralComponent } from './neutral/neutral.component';
import { SidenavRoutingModule } from '../sidenav/sidenav.routing';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [SidenavComponent, NeutralComponent],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MaterialModule,
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
