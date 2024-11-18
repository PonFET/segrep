import { NgModule } from "@angular/core";
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";




@NgModule({

    declarations: [
      AboutPageComponent,
      SideBarComponent
  ],
    imports: [
      CommonModule,
      RouterModule,
    ],
    exports: [
      SideBarComponent,
      AboutPageComponent,
    ],
})

export class SharedModule { }