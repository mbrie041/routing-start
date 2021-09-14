import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: "users",
    component: UsersComponent,
    children: [
      { path: ":id/:name", component: UserComponent }, //localhost:4200/user1
    ],
  }, //localhost:4200/users
  { path: "", component: HomeComponent }, //localhost:4200
  {
    path: "servers",
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent }, //localhost:4200/servers
      { path: ":id/edit", component: EditServerComponent },
    ],
  }, //localhost:4200/servers
  { path: "not-found", component: PageNotFoundComponent }, //not found route
  { path: "**", redirectTo: "/not-found" }, //wildcard
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
