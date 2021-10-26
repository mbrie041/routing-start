import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGaurd } from "./servers/edit-server/can-deactivate-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },

  { path: "", component: HomeComponent },
  {
    path: "servers",
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGaurd],
      },
    ],
  },
  // { path: "not-found", component: PageNotFoundComponent }, //not found route
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found!" },
  }, //not found route
  { path: "**", redirectTo: "/not-found" }, //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
