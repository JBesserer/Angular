import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { TypeComponent } from './type/type.component';
import { SidenavRoutingModule } from '../sidenav/sidenav.routing';
import { MaterialModule } from '../material-module';
import { TypeService } from '../sidenav/services/type.service';
import { TemtemService } from '../sidenav/services/temtem.service';
import { WeaknessService } from '../sidenav/services/weakness.service';
import { TechniqueService } from '../sidenav/services/technique.service';
import { SumPipe } from './pipes/sum.pipe';
import { AddApiUrlPipe } from './pipes/add-api-url.pipe';
import { TechniqueTableComponent } from './technique-table/technique-table.component';
import { TemtemPageComponent } from './temtem-page/temtem-page.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    SidenavComponent,
    TypeComponent,
    TechniqueTableComponent,
    TemtemPageComponent,
    SumPipe,
    AddApiUrlPipe],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [TypeService, TemtemService, WeaknessService, TechniqueService],
  exports: [SidenavComponent]
})
export class SidenavModule { }
