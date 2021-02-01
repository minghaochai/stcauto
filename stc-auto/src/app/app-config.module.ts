import { NgModule, InjectionToken } from '@angular/core';
import { env } from 'process';
import { environment } from '../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  emailHost: string;
  emailLogin: string;
  emailPW: string;
}

export const APP_DI_CONFIG: AppConfig = {
  emailHost: environment.emailHost,
  emailLogin: environment.emailLogin,
  emailPW: environment.emailPW
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }