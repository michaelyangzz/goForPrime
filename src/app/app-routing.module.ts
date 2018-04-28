import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { PermissionadminComponent } from './permissionadmin/permissionadmin.component';
import { RoleadminComponent } from './roleadmin/roleadmin.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'superadmin', component: SuperadminComponent },
  { path: 'permissionadmin', component: PermissionadminComponent },
  { path: 'roleadmin', component: RoleadminComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
