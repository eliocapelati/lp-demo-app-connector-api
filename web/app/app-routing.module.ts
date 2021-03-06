import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LpHomeComponent} from "./components/lp-home/lp-home.component";
import {LpDemoComponent} from "./components/lp-demo/lp-demo.component";
import {LpStartTutotialComponent} from "./components/lp-start-tutorial/lp-start-tutotial.component";
import {AuthGuardGuard} from "./core/guards/auth-guard.guard";
import {LogoutGuard} from "./core/guards/logout.guard";
import {LpLoginComponent} from "./components/lp-login/lp-login.component";

const routes: Routes = [
  {path: '', redirectTo: 'settings', pathMatch: 'full'},
  {path: 'login', component: LpLoginComponent},
  {path: 'settings', component: LpHomeComponent,canActivate: [AuthGuardGuard]},
  {path: 'logout', component: LpLoginComponent, canActivate: [LogoutGuard]},
  {path: 'demo', component: LpDemoComponent, canActivate: [AuthGuardGuard]},
  {path: 'settings/start', component: LpStartTutotialComponent,   canActivate: [AuthGuardGuard]}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
