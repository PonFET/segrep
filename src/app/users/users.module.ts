import { NgModule } from "@angular/core";
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { RepairersPageComponent } from './pages/repairers-page/repairers-page.component';
import { UsersRoutingModule } from "./users-routing.module";
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';




@NgModule({

    declarations: [
    ProfilePageComponent,
    ClientsPageComponent,
    RepairersPageComponent,
    CompaniesPageComponent,
  ],
    imports: [
      UsersRoutingModule,
    ],
    exports: [],
})

export class UsersModule { }