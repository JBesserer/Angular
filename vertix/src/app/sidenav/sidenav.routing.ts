import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { TypeComponent } from './type/type.component';
import { TemtemPageComponent } from './temtem-page/temtem-page.component';

const routes: Routes = [
    {
      path: '',
      component: SidenavComponent,
      children: [
        {
          path: 'type/:typeCode',
          component: TypeComponent
        },
        {
          path: 'temtem/:id',
          component: TemtemPageComponent
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
