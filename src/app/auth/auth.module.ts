import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthRoutingModule } from "./auth-routing.module";




@NgModule({

    declarations: [
    LoginComponent,
    SignUpComponent,
    SignUpPageComponent,
    LoginPageComponent
  ],
    imports: [
      AuthRoutingModule,
    ],
    exports: [],
})

export class AuthModule { }