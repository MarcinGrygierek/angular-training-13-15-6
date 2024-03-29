import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { ListComponent } from './list/list.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { CounterComponent } from './counter/counter.component';
import { UserPageComponent } from './user-page/user-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ContainerComponent } from './container/container.component';
import { ContentConditionalComponent } from './content-conditional/content-conditional.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { GoodObservableComponent } from './good-observable/good-observable.component';
import { RxjsTestComponent } from './rxjs-test/rxjs-test.component';
import { HigherOrderOperatorsComponent } from './higher-order-operators/higher-order-operators.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ListComponent,
    DirectiveTestComponent,
    CounterComponent,
    UserPageComponent,
    FaqPageComponent,
    ContainerComponent,
    ContentConditionalComponent,
    ObservableTestComponent,
    GoodObservableComponent,
    RxjsTestComponent,
    HigherOrderOperatorsComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
