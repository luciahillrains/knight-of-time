import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { MenuComponent } from './menu/menu.component';
import { MapTileComponent } from './map-tile/map-tile.component';
import { EventHostComponent } from './event-host/event-host.component';
import { ItemScreenComponent } from './item-screen/item-screen.component';
import { CardComponent } from './card/card.component';
import { StatusScreenComponent } from './status-screen/status-screen.component';
import { BattleScreenComponent } from './battle-screen/battle-screen.component';
import { CardScreenComponent } from './card-screen/card-screen.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    TitleScreenComponent,
    GameScreenComponent,
    MenuComponent,
    MapTileComponent,
    EventHostComponent,
    ItemScreenComponent,
    CardComponent,
    StatusScreenComponent,
    BattleScreenComponent,
    CardScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
