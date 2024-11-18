import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";




const routes: Routes = [

    {
        path: 'login',
        component: LoginPageComponent,
    },
    {
        path: 'sign-up',
        component: SignUpPageComponent,
    },
    {
        path: '**',
        redirectTo: 'login',
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
];

@NgModule({

    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AuthRoutingModule { }