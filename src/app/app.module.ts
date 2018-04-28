import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { UicontrolsModule } from './uicontrols/uicontrols.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { PermissionadminComponent } from './permissionadmin/permissionadmin.component';
import { RoleadminComponent } from './roleadmin/roleadmin.component';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    SuperadminComponent,
    PermissionadminComponent,
    RoleadminComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, NgbModule.forRoot(), AppRoutingModule, UicontrolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
