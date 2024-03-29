import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [AppComponent, ExemplosPipesComponent, CamelCasePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR',
    // },
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) =>
        settingsService.getLocale(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
