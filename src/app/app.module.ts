import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SyncEntityOverviewComponent} from './sync-entity-overview/sync-entity-overview.component';
import {HttpClientModule} from "@angular/common/http";
import {SyncEntityService} from "./service/sync-entity.service";
import {SyncInputFormComponent} from './sync-input-form/sync-input-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SyncInputService} from "./service/sync-input.service";
import {SearchFilterPipe} from "./sync-entity-overview/search-filter-pipe";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { SyncWeekOverviewComponent } from './sync-week-overview/sync-week-overview.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchFilterPipe,
        SyncEntityOverviewComponent,
        SyncInputFormComponent,
        SyncWeekOverviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ClipboardModule
    ],
    providers: [SyncEntityService, SyncInputService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
