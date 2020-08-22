import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NeutralComponent } from './neutral/neutral.component';
import { SidenavComponent } from './sidenav.component';

const routes: Routes = [
    {
      path: '',
      component: SidenavComponent,
      children: [
        {
          path: 'neutral',
          component: NeutralComponent
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
