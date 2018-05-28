import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// platformBrowserDynamic() is a funcion that returns a platform object that has a bootstrap module function on it. That is the function you will use to bootstrap your root module on the platform.
//Appmodule is the root module that the bootstrapModule takes.

platformBrowserDynamic().bootstrapModule(AppModule); //goes to appmodule and finds the thing to bootstrap (see app.module.ts)
