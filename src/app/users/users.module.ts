import { NgModule } from "@angular/core";
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { RepairersPageComponent } from './pages/repairers-page/repairers-page.component';
import { UsersRoutingModule } from "./users-routing.module";
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';




@NgModule({

    declarations: [
    ProfilePageComponent,
    ClientsPageComponent,
    RepairersPageComponent,
    DashboardPageComponent
  ],
    imports: [
      UsersRoutingModule,
    ],
    exports: [],
})

export class UsersModule { }