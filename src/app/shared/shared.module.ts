import { NgModule } from "@angular/core";
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';




@NgModule({

    declarations: [
    AboutPageComponent,
    SideBarComponent
  ],
    imports: [],
    exports: [],
})

export class SharedModule { }