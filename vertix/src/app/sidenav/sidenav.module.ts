import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { TypeComponent } from './type/type.component';
import { SidenavRoutingModule } from '../sidenav/sidenav.routing';
import { MaterialModule } from '../material-module';
import { TypeService } from '../sidenav/services/type.service';
import { TemtemService } from '../sidenav/services/temtem.service';
import { WeaknessService } from '../sidenav/services/weakness.service';
import { SumPipe } from './pipes/sum.pipe';
import { AddApiUrlPipe } from './pipes/add-api-url.pipe';


@NgModule({
  declarations: [SidenavComponent, TypeComponent, SumPipe, AddApiUrlPipe],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MaterialModule,
  ],
  providers: [TypeService, TemtemService, WeaknessService],
  exports: [SidenavComponent]
})
export class SidenavModule { }
