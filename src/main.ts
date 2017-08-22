import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { UserService } from './app/users.service';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(AppModule);
