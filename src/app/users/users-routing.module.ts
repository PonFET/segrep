import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { ClientsPageComponent } from "./pages/clients-page/clients-page.component";
import { RepairersPageComponent } from "./pages/repairers-page/repairers-page.component";




const routes: Routes = [

    {
        path: 'profile',
        component: ProfilePageComponent,
    },
    {
        path: 'clients',
        component: ClientsPageComponent,
    },
    {
        path: 'repairers',
        component: RepairersPageComponent,
    },
    {
        path: '**',
        redirectTo: 'dashboard',
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];

@NgModule({

    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class UsersRoutingModule { }