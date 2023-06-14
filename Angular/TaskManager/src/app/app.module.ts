import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { TasksActionsComponent } from './tasks-actions/tasks-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    TasksListComponent,
    SingleTaskComponent,
    TasksActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
