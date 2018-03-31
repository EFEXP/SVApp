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
import { FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { CardListComponent } from './card-list/card-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardSearchComponent } from './card-search/card-search.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CardDetailpageComponent } from './card-detailpage/card-detailpage.component';
import { GetCardService } from './getCard.service';
import { DataKeeperService } from './data-keeper.service';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  declarations: [
    AppComponent,
    CardListComponent,
    CardSearchComponent,
    MainpageComponent,
    CardDetailpageComponent
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
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatDividerModule,
    BrowserAnimationsModule

  ],

  providers: [GetCardService, DataKeeperService],
  bootstrap: [AppComponent]
})
export class AppModule {
 

}
