import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, 
  MatCheckboxModule, 
  MatInputModule, 
  MatCardModule
} from '@angular/material';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { CardListComponent } from './card-list/card-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClanPipe } from './clan.pipe';
import { CardSearchComponent } from './card-search/card-search.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  declarations: [
    AppComponent,
    CardDetailComponent,
    CardListComponent,
    ClanPipe,
    CardSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatProgressBarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 

}
