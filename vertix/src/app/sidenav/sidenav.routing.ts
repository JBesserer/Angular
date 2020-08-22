import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
    {
      path: '',
      component: SidenavComponent,
      children: [
        {
          path: 'type/:typeCode',
          component: TypeComponent
        }
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SidenavRoutingModule {}
